import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransaccionService } from '../../../core/services/transaccion.service';
import { CommonModule } from '@angular/common';
import { Transaccion } from '../../../models/transaccion.model';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transaccion-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
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
      this.formGroup.reset();
    }
  }
}
