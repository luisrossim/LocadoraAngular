import { Injectable } from '@angular/core';
import { Diretor } from '../../models/diretor';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class DiretorService extends CrudService<Diretor> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/diretor');
  }

  public salvar(registro: Partial<Diretor>): Observable<Diretor> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }

}
