import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AtorService } from 'src/app/core/services/ator.service';
import { Ator } from 'src/app/models/ator';
import { MessageService } from 'primeng/api';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css'],
  providers: [MessageService]
})
export class AtorComponent {
  atores: Ator[] = []
  create: boolean = false;
  edit: boolean = false;
  atorForm = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
  });

  constructor(
    private atorService: AtorService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService
  ) {}


  ngOnInit(): void {
    this.fetchAtores();
  }

  showDialogCreate() {
    this.atorForm.controls['id'].setValue('');
    this.atorForm.controls['name'].setValue('');
    this.create = true;
  }

  showDialogEdit(ator: Ator) {
    this.atorForm.setValue({
      id: ator.id,
      name: ator.name
    });
    this.edit = true;
  }

  private fetchAtores(): void {
    this.atorService.getAll().subscribe({
      next: (resp) => {
        this.atores = resp;
      },
      error: (error) => {
        console.log(error);
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

}