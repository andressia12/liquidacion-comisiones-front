import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransaccionForm } from '../transaccion-form/transaccion-form';
import { Observable, switchMap, timer } from 'rxjs';
import { TransaccionService } from '../../../core/services/transaccion.service';
import { Transaccion } from '../../../models/transaccion.model';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-transaccion-dashboard',
  standalone: true,
  imports: [TransaccionForm, CommonModule, MatCardModule, MatTableModule],
  templateUrl: './transaccion-dashboard.html',
  styleUrl: './transaccion-dashboard.css',
})
export class TransaccionDashboard implements OnInit {
  /**
   * Observable que emite el listado de transacciones para renderizar.
   *
   * Se expone como observable para utilizar con `async` en la plantilla.
   */
  transactions$!: Observable<Transaccion[]>;

  constructor(readonly service: TransaccionService) {}

  /**
   * Inicializa el componente y comienza a consultar el listado de transacciones.
   *
   * Observación: actualmente se usa un `timer(0, 100)` que refresca cada 100ms.
   * Esto sirve para demos o entornos de prueba; en producción podría necesitar
   * ajuste para evitar demasiado polling.
   */
  ngOnInit(): void {
    this.transactions$ = timer(0, 100).pipe(switchMap(() => this.service.findAll()));
  }
}
