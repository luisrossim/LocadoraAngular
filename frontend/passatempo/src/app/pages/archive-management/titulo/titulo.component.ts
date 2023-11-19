import { Component } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { TituloService } from 'src/app/core/services/titulo.service';
import { Titulo } from 'src/app/models/titulo';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ConfirmationService } from 'primeng/api';
import { Classe } from 'src/app/models/classe';
import { Ator } from 'src/app/models/ator';
import { AtorService } from 'src/app/core/services/ator.service';
import { Diretor } from 'src/app/models/diretor';
import { ClasseService } from 'src/app/core/services/classe.service';
import { DiretorService } from 'src/app/core/services/diretor.service';


@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  titulos: Titulo[] = []
  atores: Ator[] = []
  classes: Classe[] = []
  diretores: Diretor[] = []
  create: boolean = false;
  edit: boolean = false;
  titulo: Titulo = {}
  showAtores: boolean = false;
  selectedAtores: Ator[] = []
  tituloForm = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
    ano: [null, [Validators.required, Validators.min(1)]],
    sinopse: [null, [Validators.required]],
    categoria: [null, [Validators.required]],
    listaAtores: new FormControl<Ator[] | null>(null),
    classe: new FormControl<Classe | null>(null),
    diretor: new FormControl<Diretor | null>(null),
  });


  constructor(
    private tituloService: TituloService,
    private atorService: AtorService,
    private classeService: ClasseService,
    private diretorService: DiretorService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
    private confirmationService: ConfirmationService,
  ) {}


  ngOnInit(): void {
    this.fetchTitulos();
    this.fetchAtores();
    this.fetchClasses();
    this.fetchDiretores();
  }

  showDialogCreate() {
    this.tituloForm.controls['id'].setValue('');
    this.tituloForm.controls['name'].setValue('');
    this.tituloForm.controls['ano'].setValue('');
    this.tituloForm.controls['sinopse'].setValue('');
    this.tituloForm.controls['categoria'].setValue('');
    this.tituloForm.controls['listaAtores'].setValue('');
    this.tituloForm.controls['classe'].setValue('');
    this.tituloForm.controls['diretor'].setValue('');
    this.create = true;
  }

  showDialogEdit(titulo: Titulo) {
    this.titulo = titulo
    this.tituloForm.controls['id'].setValue(titulo.id);
    this.tituloForm.controls['name'].setValue(titulo.name);
    this.tituloForm.controls['ano'].setValue(titulo.ano);
    this.tituloForm.controls['sinopse'].setValue(titulo.sinopse);
    this.tituloForm.controls['categoria'].setValue(titulo.categoria);
    this.tituloForm.controls['listaAtores'].setValue(titulo.listaAtores);
    this.tituloForm.controls['classe'].setValue(titulo.classe);
    this.tituloForm.controls['diretor'].setValue(titulo.diretor);
    this.edit = true
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

  private fetchAtores(): void {
    this.atorService.getAll().subscribe({
      next: (resp) => {
        this.atores = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro ao buscar atores')
      }
    });
  }

  private fetchClasses(): void {
    this.classeService.getAll().subscribe({
      next: (resp) => {
        this.classes = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro ao buscar classes')
      }
    });
  }

  private fetchDiretores(): void {
    this.diretorService.getAll().subscribe({
      next: (resp) => {
        this.diretores = resp;
      },
      error: (error) => {
        this.alerts.showError('Erro ao buscar diretores')
      }
    });
  }

  handleCreate(): void {
    this.tituloService.salvar(this.tituloForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Titulo cadastrado com sucesso!')
        this.fetchTitulos()
        this.create = false
      },
      error: (error) => this.alerts.showError('Erro ao cadastrar titulo!')
    });
  }

  handleUpdate(): void {
    this.tituloService.salvar(this.tituloForm.value).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Titulo editado com sucesso!')
        this.fetchTitulos()
        this.edit = false
      },
      error: (error) => this.alerts.showError('Erro ao editar titulo!')
    });
  }

  confirmDelete(titulo: Titulo){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar o titulo ' + `<strong>${titulo.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.handleDelete(titulo);
      },
    });
  }

  handleDelete(titulo: Titulo){
    this.titulo = titulo;
    this.tituloService.delete(titulo.id!).subscribe({
      next: (resp) => {
        this.alerts.showSuccess('Titulo ' + `${titulo.name}` + ' removido com sucesso'),
        this.fetchTitulos()
      },
      error: (error) => this.alerts.showError('Erro ao deletar titulo')
    });
  }

  listarAtores(titulo: Titulo) {
    this.titulo = titulo
    this.showAtores = true
  }
}
