import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';
import { Dependente } from 'src/app/models/dependente';

@Injectable({
  providedIn: 'root'
})
export class DependenteService extends CrudService<Dependente> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/dependente');
  }

  public salvar(registro: Partial<Dependente>): Observable<Dependente> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }
}