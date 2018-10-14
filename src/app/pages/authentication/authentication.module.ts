import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { LoginComponent } from './login/login.component';
//routes
import { AuthenticationRoutes } from './authentication.routing';
//forms
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
  ]
})
export class AuthenticationModule {}
