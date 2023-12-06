import { Component } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { SocioService } from 'src/app/core/services/socio.service';
import { ConfirmationService } from 'primeng/api';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { Socio } from 'src/app/models/socio';
import { Dependente } from 'src/app/models/dependente';
import { DependenteService } from 'src/app/core/services/dependente.service';


@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.component.html',
  styleUrls: ['./dependente.component.css']
})
export class DependenteComponent {
  dependentes: Dependente[] = []
  socios: Socio[] = []
  create: boolean = false;
  edit: boolean = false;
  dependente: Dependente = {}
  dependenteForm = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
    dt_nascimento: [null, [Validators.required]],
    sexo: [null, [Validators.required]],
    ativo: true,
    socio: new FormControl<Socio | null>(null),
  });


  constructor(
    private dependenteService: DependenteService,
    private socioService: SocioService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}


  
  ngOnInit(): void {
    this.fetchDependentes();
    this.fetchSocios();
  }

  showDialogCreate() {
    this.dependenteForm.reset();
    this.dependenteForm.controls['ativo'].setValue(true);
    this.create = true;
  }

  showDialogEdit(dependente: Dependente) {
    this.dependente = dependente
    this.dependenteForm.controls['id'].setValue(dependente.id);
    this.dependenteForm.controls['name'].setValue(dependente.name);
    this.dependenteForm.controls['dt_nascimento'].setValue(dependente.dt_nascimento);
    this.dependenteForm.controls['sexo'].setValue(dependente.sexo);
    this.dependenteForm.controls['socio'].setValue(dependente.socio);
    this.edit = true
  }

  private fetchDependentes(): void {
    this.dependenteService.getAll().subscribe({
      next: (resp) => {
        this.dependentes = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na listagem de dependentes')
      }
    });
  }

  private fetchSocios(): void {
    this.socioService.getAll().subscribe({
      next: (resp) => {
        this.socios = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro na busca de sócios')
      }
    });
  }

  handleCreate(): void {
    this.dependenteService.salvar(this.dependenteForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Dependente cadastrado com sucesso!')
        this.fetchDependentes()
        this.create = false
      },
      error: (error) => this.alerts.showError(error.error)
    });
  }

  handleUpdate(): void {
    this.dependenteService.salvar(this.dependenteForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Dependente editado com sucesso!')
        this.fetchDependentes()
        this.edit = false
      },
      error: (error) => this.alerts.showError(error.error)
    });
  }

  confirmDelete(dependente: Dependente){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja desativar o dependente ' + `<strong>${dependente.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(dependente);
      },
    });
  }

  handleDelete(dependente: Dependente){
    this.dependente = dependente;
    this.dependenteService.delete(dependente.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Dependente ' + `${dependente.name}` + ' desativado com sucesso'),
        this.fetchDependentes()
      },
      error: (error) => this.alerts.showError('Erro ao desativar dependente')
    });
  }
}
