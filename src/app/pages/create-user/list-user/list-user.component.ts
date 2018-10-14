import { Component, OnInit } from '@angular/core';

//modal
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
//toastr
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    public toastr: ToastrService
  ) { }
  users: Array<User> = [];
  user: User;
  ngOnInit() {
    this.userService.getAll().subscribe((users: Array<User>) => {
      this.users = users
    });
  }
  openModalDeleteConfirm(modal, user) {
    this.user = user
    this.modalService.open(modal, { size: 'sm' });
  }
  deleteCofirmed() {
    this.modalService.dismissAll();
    this.userService.delete(this.user.id).then(()=>{
      this.toastr.success('Escluido com sucesso.', '', { timeOut: 10000 });
    }).catch(err => {
      console.log(err)
      this.toastr.error('Erro ao excluir.', '', { timeOut: 10000 });
    });
  }
}
