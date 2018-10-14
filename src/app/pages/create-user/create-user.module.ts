import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//form mask
import {NgxMaskModule} from 'ngx-mask';
import { ListUserComponent } from './list-user/list-user.component'

@NgModule({
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [CreateUserComponent, ListUserComponent]
})
export class CreateUserModule { }
