import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { DiretorService } from 'src/app/core/services/diretor.service';
import { Diretor } from 'src/app/models/diretor';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export class DiretorComponent {
  diretores: Diretor[] = []
  create: boolean = false;
  edit: boolean = false;
  diretor: Diretor = {}
  diretorForm = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
  });

  constructor(
    private diretorService: DiretorService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}

  
  ngOnInit(): void {
    this.fetchDiretores();
  }

  showDialogCreate() {
    this.diretorForm.reset();
    this.create = true;
  }

  showDialogEdit(diretor: Diretor) {
    this.diretor = diretor
    this.diretorForm.controls['id'].setValue(diretor.id);
    this.diretorForm.controls['name'].setValue(diretor.name);
    this.edit = true
  }

  private fetchDiretores(): void {
    this.diretorService.getAll().subscribe({
      next: (resp) => {
        this.diretores = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de diretores')
      }
    });
  }

  handleCreate(): void {
    this.diretorService.salvar(this.diretorForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Diretor cadastrado com sucesso!')
        this.fetchDiretores()
        this.create = false
      },
      error: (error) => this.alerts.showError('Erro ao cadastrar diretor!')
    });
  }

  handleUpdate(): void {
    this.diretorService.salvar(this.diretorForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Diretor editado com sucesso!')
        this.fetchDiretores()
        this.edit = false
      },
      error: (error) => this.alerts.showError('Erro ao editar diretor!')
    });
  }

  confirmDelete(diretor: Diretor){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar o diretor ' + `<strong>${diretor.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(diretor);
      },
    });
  }

  handleDelete(diretor: Diretor){
    this.diretor = diretor;
    this.diretorService.delete(diretor.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Diretor ' + `${diretor.name}` + ' removido com sucesso'),
        this.fetchDiretores()
      },
      error: (error) => this.alerts.showError('Erro ao deletar diretor')
    });
  }

}
