import { Component } from '@angular/core';
//router
import { Router } from '@angular/router';
//forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//sevices
// import { AuthService } from '../../../services/auth.service';
//spinner
// import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userForm: FormGroup;
  alert: any = {};
  submited:boolean = false;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    // public authService: AuthService
  ) { }
  ngOnInit() {
    this.buildForm();
  }
  //page event
  onSubmitLoginUser() {
    this.router.navigate(['/starter']);
    // this.submited = true;
    // if(this.userForm.valid){
    //   this.authService.loginEmail(this.userForm.value.email, this.userForm.value.password)
    //   .then((res) => {
    //     this.router.navigate(['/home'])
    //   }).catch((err) => {
    //     this.alert.msg = 'Email or Password not found';
    //     console.log(err); 
    //   });
    // }
    // else{
    //   this.alert.msg = 'Email or Password is invalid.';
    // }
  }
  closeAlert() {
    this.alert.msg = '';
  }
  //validations forms
  buildForm() {
    this.userForm = this.fb.group({
      'email': ['',[Validators.required]],
      'password': ['', [Validators.required]]
    });
  }
  get f(){return this.userForm.controls}
}
