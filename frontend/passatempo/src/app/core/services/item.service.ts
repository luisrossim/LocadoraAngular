import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends CrudService<Item> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/item');
  }

  public salvar(registro: Partial<Item>): Observable<Item> {
    if (registro.id) {
      return this.update(registro.id, registro);
    }
    return this.create(registro);
  }
}
