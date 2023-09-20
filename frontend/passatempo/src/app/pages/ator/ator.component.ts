import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { AtorService } from 'src/app/core/services/ator.service';
import { Ator } from 'src/app/models/ator';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})

export class AtorComponent {

  atores$: Observable<Ator[]> | null = null;

  constructor(
    private atorService: AtorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.refresh();
  }

  refresh(){
    this.atores$ = this.atorService.listar().pipe(
      catchError(error => {
        alert(`Erro ao listar atores (${error})`)
        return of ([])
      })
    )
  }

  handleInsert() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  handleEdit(ator: Ator) {
    this.router.navigate(['edit', ator.id], { relativeTo: this.route });
  }

  handleDelete(ator: Ator){
    this.atorService.remover(ator.id).subscribe(
      () => {
        this.refresh();
        alert("Ator removido com sucesso!")
      },
      (error) => alert(error)
    );
  }

}
