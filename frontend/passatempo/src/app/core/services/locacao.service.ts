import { Injectable } from '@angular/core';
import { Locacao } from '../../models/locacao';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService extends CrudService<Locacao> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/locacao');
  }

  public salvar(registro: Partial<Locacao>): Observable<Locacao> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }

  public devolver(registro: Partial<Locacao>): Observable<Locacao> {
    return this.http.put<Locacao>(`${this.API}/devolver/${registro.id}`, registro);
  }

}
