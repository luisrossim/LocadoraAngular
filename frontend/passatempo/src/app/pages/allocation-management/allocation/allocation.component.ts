import { Component } from '@angular/core';
import { FormControl, UntypedFormBuilder } from '@angular/forms';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ItemService } from 'src/app/core/services/item.service';
import { LocacaoService } from 'src/app/core/services/locacao.service';
import { Cliente } from 'src/app/models/cliente';
import { Item } from 'src/app/models/item';
import { Locacao } from 'src/app/models/locacao';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent {
  locacoes: Locacao[] = []
  itens: Item[] = []
  clientes: Cliente[] = []
  create: boolean = false;
  edit: boolean = false;
  locacao: Locacao = {}
  locacaoForm = this.formBuilder.group({
    id: [''],
    dt_locacao: [''],
    dt_devolucaoPrevista: [''],
    dtDevolucaoEfetiva: [''],
    valor: [''],
    multa: [''],
    item: new FormControl<Item | null>(null),
    cliente: new FormControl<Cliente | null>(null),
  });


  constructor(
    private locacaoService: LocacaoService,
    private itemService: ItemService,
    private clienteService: ClienteService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}


  ngOnInit(): void {
    this.fetchLocacoes();
    this.fetchItens();
    this.fetchClientes();
  }

  showDialogCreate() {
    this.locacaoForm.reset();
    this.create = true;
  }

  showDialogEdit(locacao: Locacao) {
    this.locacao = locacao
    this.locacaoForm.controls['id'].setValue(locacao.id);
    this.locacaoForm.controls['dt_locacao'].setValue(locacao.dt_locacao);
    this.locacaoForm.controls['dt_devolucaoPrevista'].setValue(locacao.dt_devolucaoPrevista);
    this.locacaoForm.controls['dtDevolucaoEfetiva'].setValue(locacao.dtDevolucaoEfetiva);
    this.locacaoForm.controls['valor'].setValue(locacao.valor);
    this.locacaoForm.controls['multa'].setValue(locacao.multa);
    this.locacaoForm.controls['item'].setValue(locacao.item);
    this.locacaoForm.controls['cliente'].setValue(locacao.cliente);
    this.edit = true
  }

  private fetchLocacoes(): void {
    this.locacaoService.getAll().subscribe({
      next: (resp) => {
        this.locacoes = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de locações')
      }
    });
  }

  private fetchItens(): void {
    this.itemService.getAll().subscribe({
      next: (resp) => {
        this.itens = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na busca de itens')
      }
    });
  }

  private fetchClientes(): void {
    this.clienteService.getAll().subscribe({
      next: (resp) => {
        this.clientes = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na busca de clientes')
      }
    });
  }

  handleCreate(): void {
    this.locacaoService.salvar(this.locacaoForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Locacao efetuada com sucesso!')
        this.fetchLocacoes()
        this.create = false
      },
      error: (error) => this.alerts.showError(error.error)
    });
  }

  handleUpdate(): void {
    this.locacaoService.salvar(this.locacaoForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Locacao editada com sucesso!')
        this.fetchLocacoes()
        this.edit = false
      },
      error: (error) => this.alerts.showError('Erro ao editar locacao!')
    });
  }

  confirmDelete(locacao: Locacao){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja cancelar a locação ' + `<strong>${locacao.id}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(locacao);
      },
    });
  }

  confirmDevolucao(locacao: Locacao){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja concluir a locação ' + `<strong>${locacao.id} (${locacao.item?.titulo?.name})</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDevolucao(locacao);
      },
    });
  }

  handleDelete(locacao: Locacao){
    this.locacao = locacao;
    this.locacaoService.delete(locacao.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Locação ' + `${locacao.id}` + ' desativada com sucesso'),
        this.fetchLocacoes()
      },
      error: (error) => this.alerts.showError(error.error)
    });
  }

  handleDevolucao(locacao: Locacao){
    this.locacao = locacao;
    this.locacaoService.devolver(this.locacao).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Locação ' + `${locacao.id}` + ' devolvida com sucesso'),
        this.fetchLocacoes()
      },
      error: (error) => this.alerts.showError(error.error)
    });
  }

}
