import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransaccionService } from '../../../core/services/transaccion.service';
import { CommonModule } from '@angular/common';
import { Transaccion } from '../../../models/transaccion.model';

@Component({
  selector: 'app-transaccion-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transaccion-form.html',
  styleUrl: './transaccion-form.css',
})
export class TransaccionForm implements OnInit {
  public formGroup!: FormGroup;
  transacciones: Transaccion[] = [];

  constructor(readonly fb: FormBuilder, readonly service: TransaccionService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      monto: [null, [Validators.required, Validators.min(1)]],
    });
  }

  submit(): void {
    if (this.formGroup.valid) {
      this.service.crear(this.formGroup.value.monto).subscribe();
      // this.service.crear(this.formGroup.value.monto).subscribe((tx) => {
      //   this.transacciones.push(tx);
      // });
      this.formGroup.reset();
    }
  }
}
