import { Injectable } from '@angular/core';
import { Ator } from '../../models/ator';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtorService extends CrudService<Ator> {

  constructor(protected readonly HttpClient: HttpClient) {
    super(HttpClient, 'api/ator');
  }

}
