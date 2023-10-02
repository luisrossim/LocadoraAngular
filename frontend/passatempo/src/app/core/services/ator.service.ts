import { Injectable } from '@angular/core';
import { Ator } from '../../models/ator';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private readonly API = 'api/ator';

  constructor(private http: HttpClient) { }


  private cadastrar(registro: Partial<Ator>): Observable<Ator> {
    return this.http.post<Ator>(this.API, registro).pipe(first());
  }

  private editar(registro: Partial<Ator>): Observable<Ator> {
    return this.http.put<Ator>(`${this.API}/${registro.id}`, registro).pipe(first());
  }

  public remover(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(first());
  }

  public listar() {
    return this.http.get<Ator[]>(this.API).pipe(
      first(), 
      tap(atores => console.log(atores))
    );
  }

  public buscarPorID(id: string) {
    return this.http.get<Ator>(`${this.API}/${id}`);
  }

  public salvar(registro: Partial<Ator>): Observable<Ator> {
    if( registro.id ) {
      return this.editar(registro);
    }
    return this.cadastrar(registro);
  }

}
