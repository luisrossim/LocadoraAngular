import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CrudService<Cliente> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/cliente');
  }

  public salvar(registro: Partial<Cliente>): Observable<Cliente> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }

}
