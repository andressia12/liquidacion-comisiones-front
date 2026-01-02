import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransaccionForm } from '../transaccion-form/transaccion-form';
import { Observable, switchMap, timer } from 'rxjs';
import { TransaccionService } from '../../../core/services/transaccion.service';
import { Transaccion } from '../../../models/transaccion.model';

@Component({
  selector: 'app-transaccion-dashboard',
  standalone: true,
  imports: [AsyncPipe, TransaccionForm, CommonModule],
  templateUrl: './transaccion-dashboard.html',
  styleUrl: './transaccion-dashboard.css',
})
export class TransaccionDashboard implements OnInit {
  transactions$!: Observable<Transaccion[]>;

  constructor(readonly service: TransaccionService) {}

  ngOnInit(): void {
    this.transactions$ = timer(0, 100000).pipe(switchMap(() => this.service.findAll()));
  }
}
