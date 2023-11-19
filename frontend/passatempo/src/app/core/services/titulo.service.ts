import { Injectable } from '@angular/core';
import { Titulo } from 'src/app/models/titulo';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class TituloService extends CrudService<Titulo>  {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/titulo');
  }

  public salvar(registro: Partial<Titulo>): Observable<Titulo> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }
}
