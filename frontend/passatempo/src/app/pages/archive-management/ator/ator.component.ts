import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AtorService } from 'src/app/core/services/ator.service';
import { Ator } from 'src/app/models/ator';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent {
  atores: Ator[] = []
  create: boolean = false;
  edit: boolean = false;
  ator: Ator = {}
  atorForm = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
  });

  constructor(
    private atorService: AtorService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}


  ngOnInit(): void {
    this.fetchAtores();
  }

  showDialogCreate() {
    this.atorForm.reset();
    this.create = true;
  }

  showDialogEdit(ator: Ator) {
    this.ator = ator
    this.atorForm.controls['id'].setValue(ator.id);
    this.atorForm.controls['name'].setValue(ator.name);
    this.edit = true
  }

  private fetchAtores(): void {
    this.atorService.getAll().subscribe({
      next: (resp) => {
        this.atores = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de atores')
      }
    });
  }

  handleCreate(): void {
    this.atorService.salvar(this.atorForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Ator cadastrado com sucesso!')
        this.fetchAtores()
        this.create = false
      },
      error: (error) => this.alerts.showError('Erro ao cadastrar ator!')
    });
  }

  handleUpdate(): void {
    this.atorService.salvar(this.atorForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Ator editado com sucesso!')
        this.fetchAtores()
        this.edit = false
      },
      error: (error) => this.alerts.showError('Erro ao editar ator!')
    });
  }

  confirmDelete(ator: Ator){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar o ator ' + `<strong>${ator.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(ator);
      },
    });
  }

  handleDelete(ator: Ator){
    this.ator = ator;
    this.atorService.delete(ator.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Ator ' + `${ator.name}` + ' removido com sucesso'),
        this.fetchAtores()
      },
      error: (error) => this.alerts.showError('Erro ao deletar ator')
    });
  }

}
