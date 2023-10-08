import { Injectable } from '@angular/core';
import { Classe } from '../../models/classe';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClasseService extends CrudService<Classe> {

  constructor(protected override readonly http: HttpClient) {
    super(http, 'classe');
  }

}
