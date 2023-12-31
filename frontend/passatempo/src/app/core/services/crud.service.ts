import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

export class CrudService<T> {

  constructor(
    protected readonly http: HttpClient,
    protected readonly API: string
  ) {}


  public create(registro: Partial<T>): Observable<T> {
    return this.http.post<T>(`${this.API}`, registro);
  }

  public update(id: number | string, registro: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.API}/${id}`, registro);
  }

  public delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.API);
  }

  public getById(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.API}/${id}`);
  }
  
}
