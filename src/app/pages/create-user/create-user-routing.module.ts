import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'create-user',
      component: CreateUserComponent,
      data: {
        title: 'Cadastro de Usuário',
        urls: [
          { title: 'Home', url: '/starter' },
          { title: 'Usuários', url: '/user/list-user' },
          { title: 'Cadastro de Usuário' }
        ]
      }
    },
    {
      path: 'list-user',
      component: ListUserComponent,
      data: {
        title: 'Usuários',
        urls: [
          { title: 'Home', url: '/starter' },
          { title: 'Usuários' }
        ]
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserRoutingModule { }
