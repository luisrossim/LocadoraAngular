import { Injectable } from '@angular/core';
import { Diretor } from '../../models/diretor';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  private readonly API = 'api/diretor';

  constructor(private http: HttpClient) { }


  private cadastrar(registro: Partial<Diretor>): Observable<Diretor> {
    return this.http.post<Diretor>(this.API, registro).pipe(first());
  }

  private editar(registro: Partial<Diretor>): Observable<Diretor> {
    return this.http.put<Diretor>(`${this.API}/${registro.id}`, registro).pipe(first());
  }

  public remover(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(first());
  }

  public listar() {
    return this.http.get<Diretor[]>(this.API).pipe(
      first(), 
      tap(diretores => console.log(diretores))
    );
  }

  public buscarPorID(id: string) {
    return this.http.get<Diretor>(`${this.API}/${id}`);
  }

  public salvar(registro: Partial<Diretor>): Observable<Diretor> {
    if( registro.id ) {
      return this.editar(registro);
    }
    return this.cadastrar(registro);
  }
}
