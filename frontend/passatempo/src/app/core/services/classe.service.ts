import { Injectable } from '@angular/core';
import { Classe } from '../../models/classe';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClasseService extends CrudService<Classe> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/classe');
  }

  public salvar(registro: Partial<Classe>): Observable<Classe> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }

}
