import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ClasseService } from 'src/app/core/services/classe.service';
import { Classe } from 'src/app/models/classe';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})

export class ClasseComponent {

  classes$: Observable<Classe[]> | null = null;

  constructor(
    private classeService: ClasseService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) {
    this.refresh();
  }

  refresh(){
    this.classes$ = this.classeService.listar().pipe(
      catchError(error => {
        this.alerts.showError('Algo inesperado aconteceu na listagem de classes')
        return of ([])
      })
    )
  }

  handleInsert() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  handleEdit(classe: Classe) {
    this.router.navigate(['edit', classe.id], { relativeTo: this.route });
  }

  handleDelete(classe: Classe){
    this.classeService.remover(classe.id).subscribe(
      () => {
        this.alerts.showSuccess('Classe removida com sucesso'),
        this.refresh()
      },
      (error) => this.alerts.showError('Erro ao deletar classe')
    );
  }

}
