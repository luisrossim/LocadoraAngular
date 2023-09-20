import { Injectable } from '@angular/core';
import { Classe } from '../../models/classe';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private readonly API = 'api/classe';

  constructor(private http: HttpClient) { }


  private cadastrar(registro: Partial<Classe>) {
    return this.http.post<Classe>(this.API, registro).pipe(first());
  }

  private editar(registro: Partial<Classe>) {
    return this.http.put<Classe>(`${this.API}/${registro.id}`, registro).pipe(first());
  }

  public remover(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(first());
  }

  listar() {
    return this.http.get<Classe[]>(this.API).pipe(
      first(), 
      tap(classes => console.log(classes))
    );
  }

  buscarPorID(id: string) {
    return this.http.get<Classe>(`${this.API}/${id}`);
  }

  salvar(registro: Partial<Classe>) {
    // verificar se o registro ja possui um id, se nao ira criar
    //console.log(registro);
    if( registro.id ) {
      return this.editar(registro);
    }
    return this.cadastrar(registro);
  }
}
