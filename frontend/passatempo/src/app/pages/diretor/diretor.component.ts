import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { DiretorService } from 'src/app/core/services/diretor.service';
import { Diretor } from 'src/app/models/diretor';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export class DiretorComponent {

  diretores$: Observable<Diretor[]> | null = null;

  constructor(
    private diretorService: DiretorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.refresh();
  }


  refresh(){
    this.diretores$ = this.diretorService.listar().pipe(
      catchError(error => {
        alert(`Erro ao listar diretores (${error})`)
        return of ([])
      })
    )
  }

  handleInsert() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  handleEdit(diretor: Diretor) {
    this.router.navigate(['edit', diretor.id], { relativeTo: this.route });
  }

  handleDelete(diretor: Diretor){
    this.diretorService.remover(diretor.id).subscribe(
      () => {
        this.refresh();
        alert("Diretor removido com sucesso!")
      },
      (error) => alert(error)
    );
  }
}
