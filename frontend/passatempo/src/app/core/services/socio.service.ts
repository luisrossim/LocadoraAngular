import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';
import { Socio } from 'src/app/models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService extends CrudService<Socio> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/socio');
  }

  public salvar(registro: Partial<Socio>): Observable<Socio> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }
}