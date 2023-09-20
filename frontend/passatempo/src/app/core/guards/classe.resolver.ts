import { ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClasseService } from '../services/classe.service';
import { Classe } from '../../models/classe';


@Injectable({
  providedIn: 'root'
})

export class classeResolver implements Resolve<Classe> {

  constructor(private service: ClasseService){ }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Classe> {
    if(route.params && route.params['id']){
      return this.service.buscarPorID(route.params['id']);
    }
    return of({
      id: '',
      name: '',
      value: '',
      date: ''
    });
  }

}
