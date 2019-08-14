import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Warning } from './warning';

@Injectable({providedIn: 'root'})
export class WarningService {


  private baseUrl = '/api/v1/warnings';

  constructor(private http: HttpClient) { }

  getWarnings(id: number): Observable<Warning> {
    return this.http.get<Warning>(`${this.baseUrl}/${id}`);
  }

  createWarning(warning: Warning): Observable<Warning> {
    return this.http.post<Warning>(`${this.baseUrl}`, warning);
  }

  getListWarnings(): Observable<Warning[]> {
    return this.http.get<Warning[]>(`${this.baseUrl}`);
  }

  deleteWarning(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
