import { Routes } from '@angular/router';
import { TransaccionDashboard } from './features/transacciones/transaccion-dashboard/transaccion-dashboard';

export const routes: Routes = [
  {
    path: '',
    component: TransaccionDashboard,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
