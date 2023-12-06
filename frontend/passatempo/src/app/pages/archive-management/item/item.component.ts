import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Titulo } from 'src/app/models/titulo';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { ItemService } from 'src/app/core/services/item.service';
import { TituloService } from 'src/app/core/services/titulo.service';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  item: Item = {}
  itens: Item[] = []
  titulos: Titulo[] = []
  create: boolean = false;
  edit: boolean = false;
  tipos: string[] = ["Fita","DvD","BlueRay"]
  itemForm = this.formBuilder.group({
    id: [''],
    num_serie: [null, [Validators.required]],
    dt_aquisicao: [null, [Validators.required, Validators.min(1)]],
    tipo: [null, [Validators.required]],
    titulo: new FormControl<Titulo | null>(null),
  });


  constructor(
    private itemService: ItemService,
    private tituloService: TituloService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}


  ngOnInit(): void {
    this.fetchItens();
    this.fetchTitulos();
  }

  showDialogCreate() {
    this.itemForm.reset();
    this.create = true;
  }

  showDialogEdit(item: Item) {
    this.item = item
    this.itemForm.controls['id'].setValue(item.id);
    this.itemForm.controls['num_serie'].setValue(item.num_serie);
    this.itemForm.controls['dt_aquisicao'].setValue(item.dt_aquisicao);
    this.itemForm.controls['tipo'].setValue(item.tipo);
    this.itemForm.controls['titulo'].setValue(item.titulo);
    this.edit = true
  }

  private fetchItens(): void {
    this.itemService.getAll().subscribe({
      next: (resp) => {
        this.itens = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de itens')
      }
    });
  }

  private fetchTitulos(): void {
    this.tituloService.getAll().subscribe({
      next: (resp) => {
        this.titulos = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de titulos')
      }
    });
  }

  handleCreate(): void {
    this.itemService.salvar(this.itemForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Item cadastrado com sucesso!')
        this.fetchItens()
        this.create = false
      },
      error: (error) => this.alerts.showError('Erro ao cadastrar item!')
    });
  }

  handleUpdate(): void {
    this.itemService.salvar(this.itemForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Item editado com sucesso!')
        this.fetchItens()
        this.edit = false
      },
      error: (error) => this.alerts.showError('Erro ao editar item!')
    });
  }

  confirmDelete(item: Item){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar o item ' + `<strong>${item.num_serie}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(item);
      },
    });
  }

  handleDelete(item: Item){
    this.item = item;
    this.itemService.delete(item.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Item ' + `${item.num_serie}` + ' removido com sucesso'),
        this.fetchItens()
      },
      error: (error) => this.alerts.showError('Erro ao deletar item')
    });
  }
}
