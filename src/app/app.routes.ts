import { Routes } from '@angular/router';
import { DashboardComponent } from './sections/main/dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent}
];
