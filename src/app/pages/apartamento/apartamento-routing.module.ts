import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartementoComponent } from './apartemento.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'apartamento',
      component: ApartementoComponent,
      data: {
        title: 'Apartamento',
        urls: [
          { title: 'Relatórios', url: '/start' },
          { title: 'Apartamento', }
        ]
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartamentoRoutingModule { }
