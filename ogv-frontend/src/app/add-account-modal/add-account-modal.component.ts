import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { User } from '../_interfaces/user';

@Component({
  selector: 'app-add-account-modal',
  templateUrl: './add-account-modal.component.html',
  styleUrls: ['./add-account-modal.component.scss']
})
export class AddAccountModalComponent implements OnInit {

  public nameUser : string;
  // accountAdd: User;
  public email : string;
  public password: string;
  public position: string;
  constructor(private userService: UserService, public modalRefAddAccount: MdbModalRef<AddAccountModalComponent>, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  
  accountAdd: User = {
    id : null,
    name : '',
    email : '',
    password: '',
    position: '',
  };

  addNewCard(){
    console.log(this.nameUser);
    this.accountAdd.name = this.nameUser;
    this.accountAdd.email = this.email;
    this.accountAdd.password = this.password;
    this.accountAdd.position = this.position;
    this.userService.createAccount(this.accountAdd).subscribe(() =>
   {    
      this.refresh();
    });
    this.modalRefAddAccount.close('Konto hinzugefügt');
    console.log(this.accountAdd);
  }

  refresh(): void {
    window.location.reload();
}
}
