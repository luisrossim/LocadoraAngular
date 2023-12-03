import { Component } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { SocioService } from 'src/app/core/services/socio.service';
import { ConfirmationService } from 'primeng/api';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { Socio } from 'src/app/models/socio';


@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent {
  socios: Socio[] = []
  create: boolean = false;
  edit: boolean = false;
  socio: Socio = {}
  socioForm = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
    dt_nascimento: [null, [Validators.required]],
    sexo: [null, [Validators.required]],
    ativo: true,
    CPF: [null, [Validators.required]],
    endereco: [null, [Validators.required]],
    telefone: [null, [Validators.required]],
  });


  constructor(
    private socioService: SocioService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}


  
  ngOnInit(): void {
    this.fetchSocios();
  }

  showDialogCreate() {
    this.socioForm.reset();
    this.socioForm.controls['ativo'].setValue(true);
    this.create = true;
  }

  showDialogEdit(socio: Socio) {
    this.socio = socio
    this.socioForm.controls['id'].setValue(socio.id);
    this.socioForm.controls['name'].setValue(socio.name);
    this.socioForm.controls['dt_nascimento'].setValue(socio.dt_nascimento);
    this.socioForm.controls['sexo'].setValue(socio.sexo);
    this.socioForm.controls['CPF'].setValue(socio.CPF);
    this.socioForm.controls['endereco'].setValue(socio.endereco);
    this.socioForm.controls['telefone'].setValue(socio.telefone);
    this.edit = true
  }

  private fetchSocios(): void {
    this.socioService.getAll().subscribe({
      next: (resp) => {
        this.socios = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de socios')
      }
    });
  }

  handleCreate(): void {
    this.socioService.salvar(this.socioForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Socio cadastrado com sucesso!')
        this.fetchSocios()
        this.create = false
      },
      error: (error) => this.alerts.showError('Erro ao cadastrar socio!')
    });
  }

  handleUpdate(): void {
    this.socioService.salvar(this.socioForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Socio editado com sucesso!')
        this.fetchSocios()
        this.edit = false
      },
      error: (error) => this.alerts.showError('Erro ao editar socio!')
    });
  }

  confirmDelete(socio: Socio){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja desativar o socio ' + `<strong>${socio.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(socio);
      },
    });
  }

  handleDelete(socio: Socio){
    this.socio = socio;
    this.socioService.delete(socio.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Sócio ' + `${socio.name}` + ' desativado com sucesso'),
        this.fetchSocios()
      },
      error: (error) => this.alerts.showError('Erro ao desativar socio')
    });
  }
}
