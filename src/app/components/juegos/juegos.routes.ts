import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'ahorcado',
 loadComponent: () => import('./ahorcado/ahorcado.component').then(m => m.AhorcadoComponent)
},
{
  path: 'mayor-menor',
 loadComponent: () => import('./mayor-menor/mayor-menor.component').then(m => m.MayorMenorComponent)
},
{
  path: 'preguntados',
 loadComponent: () => import('./preguntados/preguntados.component').then(m => m.PreguntadosComponent)
},
{
  path: 'palabras-desordenadas',
 loadComponent: () => import('./palabras-desordenadas/palabras-desordenadas.component').then(m => m.PalabrasDesordenadasComponent)
},
];