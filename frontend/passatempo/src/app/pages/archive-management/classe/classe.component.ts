import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/core/services/classe.service';
import { Classe } from 'src/app/models/classe';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  classes: Classe[] = []
  create: boolean = false;
  edit: boolean = false;
  classe: Classe = {}
  classeForm = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
    value: [null, [Validators.required, Validators.min(1)]],
    date: [null, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private classeService: ClasseService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}


  ngOnInit(): void {
    this.fetchClasses();
  }

  showDialogCreate() {
    this.classeForm.controls['id'].setValue('');
    this.classeForm.controls['name'].setValue('');
    this.classeForm.controls['value'].setValue('');
    this.classeForm.controls['date'].setValue('');
    this.create = true;
  }

  showDialogEdit(classe: Classe) {
    this.classe = classe
    this.classeForm.setValue({
      id: classe.id,
      name: '',
      value: '',
      date: ''
    });
    this.edit = true
  }

  private fetchClasses(): void {
    this.classeService.getAll().subscribe({
      next: (resp) => {
        this.classes = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de classes')
      }
    });
  }

  handleCreate(): void {
    this.classeService.salvar(this.classeForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Classe cadastrada com sucesso!')
        this.fetchClasses()
        this.create = false
      },
      error: (error) => this.alerts.showError('Erro ao cadastrar classe!')
    });
  }

  handleUpdate(): void {
    this.classeService.salvar(this.classeForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Classe editada com sucesso!')
        this.fetchClasses()
        this.edit = false
      },
      error: (error) => this.alerts.showError('Erro ao editar classe!')
    });
  }

  confirmDelete(classe: Classe){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar a classe ' + `<strong>${classe.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(classe);
      },
    });
  }

  handleDelete(classe: Classe){
    this.classe = classe;
    this.classeService.delete(classe.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Classe ' + `${classe.name}` + ' removida com sucesso'),
        this.fetchClasses()
      },
      error: (error) => this.alerts.showError('Erro ao deletar classe')
    });
  }
}
