import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'login',
 loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
},
{
  path: 'registro',
 loadComponent: () => import('./registro/registro.component').then(m => m.RegistroComponent)
},
];