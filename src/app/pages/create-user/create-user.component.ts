import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  form:FormGroup;
  submittedForm: boolean=false;
  user: User;
  constructor(private fb:FormBuilder, 
    private userService:UserService,  
    public toastr: ToastrService,
    private route: ActivatedRoute) { 
    
  }
  ngOnInit() {
    this.user = {
      id :'',
      nome :'',
      email :'',
      senha :'',
      tipo :0,
    }
    let id = this.route.snapshot.queryParams['id'] || '';
    if(id != ''){
      this.userService.get(id).subscribe(user=>{
        console.log(user)
        this.form.patchValue(user);
      })
    }

    this.form = this.fb.group({
      tipo: [this.user.tipo, [Validators.required]],
      id: [this.user.id],
      nome: [this.user.nome, [Validators.required]],
      email: [this.user.email, [Validators.required]],
      telefone: [this.user.telefone, [Validators.required]],
      senha: [this.user.senha, [Validators.required]],
      cpf: [this.user.senha, [Validators.required]],
    });
  }
  submitForm(){debugger
    this.submittedForm = true;
    if(this.form.valid){
      console.log(this.user);
      this.user = this.form.value as User;
      if(this.form.value.id == ''){
        this.userService.add(this.user).then(()=>{
          this.toastr.success('Usuário cadastrado.', '', { timeOut: 10000 });
        }).catch((err)=>{
          console.log(err)
          this.toastr.error('Erro ao cadastrar usuário.', '', { timeOut: 10000 });
        });
      }else{
        this.userService.update(this.user).then(()=>{
          this.toastr.success('Cadastro Atualizado.', '', { timeOut: 10000 });
        }).catch((err)=>{
          console.log(err)
          this.toastr.error('Ocorreu um erro na atualização do cadastro.', '', { timeOut: 10000 });
        });
      }
      
    }
  }
  get f() { return this.form.controls; }
}
