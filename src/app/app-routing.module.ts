import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'user',
        loadChildren: './pages/create-user/create-user.module#CreateUserModule'
      },
      {
        path: 'relatorio',
        loadChildren: './pages/apartamento/apartamento.module#ApartamentoModule'
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children:[
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
