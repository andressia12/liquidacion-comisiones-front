// src/app/core/services/transaction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../../models/transaccion.model';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  private readonly apiUrl = 'http://localhost:8080/transacciones';

  constructor(readonly http: HttpClient) {}

  findAll(): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(this.apiUrl);
  }

  crear(monto: number): Observable<Transaccion> {
    return this.http.post<Transaccion>(this.apiUrl, { monto });
  }
}
