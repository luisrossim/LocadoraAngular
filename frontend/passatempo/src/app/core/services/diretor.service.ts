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

}
