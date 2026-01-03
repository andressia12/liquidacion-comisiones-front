// src/app/core/services/transaction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Transaccion } from '../../models/transaccion.model';

/**
 * Servicio para gestionar transacciones mediante la API REST.
 *
 * Provee métodos para obtener y crear transacciones. Está
 * registrado como un servicio singleton (`providedIn: 'root'`).
 */
@Injectable({ providedIn: 'root' })
export class TransaccionService {
  /** URL base del endpoint de transacciones. */
  private readonly apiUrl = 'http://localhost:8080/transacciones';

  constructor(readonly http: HttpClient) {}

  /**
   * Obtiene todas las transacciones desde el backend.
   *
   * El endpoint puede devolver un arreglo directo o un objeto
   * con la forma `{ data: Transaccion[] }`; este método normaliza
   * la respuesta y siempre emite un `Transaccion[]`.
   *
   * @returns Observable que emite el arreglo de transacciones.
   */
  findAll(): Observable<Transaccion[]> {
    return this.http.get<Transaccion[] | { data: Transaccion[] }>(this.apiUrl).pipe(
      map((res) => {
        if (Array.isArray(res)) {
          return res;
        }
        return (res as any).data ?? [];
      })
    );
  }

  /**
   * Crea una nueva transacción.
   *
   * @param monto - Monto numérico de la nueva transacción (debe ser > 0 normalmente).
   * @returns Observable que emite la transacción creada por el servidor.
   */
  crear(monto: number): Observable<Transaccion> {
    return this.http.post<Transaccion>(this.apiUrl, { monto });
  }
}
