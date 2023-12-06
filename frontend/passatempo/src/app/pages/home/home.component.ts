import { Component } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { AtorService } from 'src/app/core/services/ator.service';
import { TituloService } from 'src/app/core/services/titulo.service';
import { Ator } from 'src/app/models/ator';
import { Classe } from 'src/app/models/classe';
import { Diretor } from 'src/app/models/diretor';
import { Titulo, categorias } from 'src/app/models/titulo';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulos: Titulo[] = []
  atores: Ator[] = []
  titulosFiltrados: Titulo[] = []
  selectedTitulo: Titulo = {}
  selectedTituloC: Titulo = {}
  selectedTituloA: Titulo = {}
  selectedCategoria = {id: '', name: ''}
  selectedAtor = {id: '', name: ''}
  categorias: any = categorias;
  filterCategorias = false;
  filterAtores = false;
  viewTitulo = false;
  showFilterName = false;

  constructor(
    private tituloService: TituloService,
    private atorService: AtorService,
    private formBuilder: UntypedFormBuilder,
    private alerts: AlertsService,
  ) {}


  ngOnInit(): void {
    this.fetchTitulos();
    this.fetchAtores();
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
        this.alerts.showError('Erro na listagem de atores')
      }
    });
  }

  handleCategoria(){
    this.alerts.showInfo('Títulos filtrados com sucesso.')
    this.showFilterName = true;
    const categoria = this.selectedCategoria.name
    this.titulosFiltrados = this.titulos.filter(titulo => titulo.categoria === categoria);
  }

  changeToCategoria(){
    this.filterCategorias = true
  }

  handleAtores(){
    this.alerts.showInfo('Títulos filtrados com sucesso.')
    this.showFilterName = true;
    const ator_id = this.selectedAtor.id
    this.titulosFiltrados = this.titulos.filter(titulo =>
      titulo.listaAtores!.some(ator => ator.id === ator_id )
    );
  }

  changeToAtor(){
    this.filterAtores = true
  }

  changeToName(){
    this.filterCategorias = false;
    this.filterAtores = false;
    this.showFilterName = false;
  }

}
