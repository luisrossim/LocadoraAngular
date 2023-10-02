import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of } from 'rxjs';
import { AtorService } from 'src/app/core/services/ator.service';
import { Ator } from 'src/app/models/ator';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})

export class AtorComponent {
  loading: boolean = true;

  atores$: Observable<Ator[]> | null = null;

  constructor(
    private atorService: AtorService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private alerts: AlertsService
  ) { }


  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.spinner.show();
    this.handleListAll();
    setTimeout(() => {
      this.loading = false;
      this.spinner.hide();
    }, 500);
  }

  handleListAll() {
    this.atores$ = this.atorService.listar().pipe(
      catchError(error => {
        this.alerts.showError('Algo inesperado aconteceu na listagem de atores')
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
        this.alerts.showSuccess('Ator removido com sucesso'),
        this.refresh()
      },
      (error) => this.alerts.showError('Erro ao deletar ator')
    );
  }

}
