import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { User } from '../_interfaces/user';

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: './edit-account-modal.component.html',
  styleUrls: ['./edit-account-modal.component.scss']
})
export class EditAccountModalComponent implements OnInit {

  @Input() accountEdit$ : User;
  // public accountEdit :  Observable<User>;
  public accountEdit : User;
  public idEditAcccount: number | null = null;
  refresh$: any;

  constructor(private userService: UserService, public modalRefEditAccount: MdbModalRef<EditAccountModalComponent>) {  
    // this.accountEdit$ = this.userService.getAccount(this.idEditAcccount);
    
  }

  ngOnInit(): void {
    console.log(this.idEditAcccount);
    this.userService.getAccount(this.idEditAcccount).subscribe(accountEdit => this.accountEdit$ = accountEdit);
    // this.accountEdit$ = this.userService.getAccount(this.idEditAcccount);
    // this.$accountEdit = this.accountEdit$ as User;
    // this.userService.getAccount(13).subscribe(accountEdit => this.accountEdit = accountEdit as User);
    // console.log(this.$accountEdit);
    // console.log(this.accountEdit$);
    // console.log(this.id$);
    // console.log(this.idEditAcccount);
  }

  safeEditAccount() {
   this.userService.updateAccount(this.idEditAcccount, this.accountEdit$).subscribe(() => {
          // this.refresh$.next('');
          this.refresh();
          // this.router.navigate(['/internerBereich']);
      });
    console.log(this.accountEdit);
    this.idEditAcccount = null;
    this.modalRefEditAccount.close('Kontodaten verändert');
  }

  deleteEditAccount(){
    if (confirm(`Bist du dir sicher, dass du das Konto löschen willst?`)) {
      console.log(this.idEditAcccount);
      this.userService.deleteAccount(this.idEditAcccount).subscribe(() => {
        this.refresh();
      // this.router.navigate(['/internerBereich']);
      });
      this.idEditAcccount = null;
      this.modalRefEditAccount.close('Konto gelöscht');
    } 
  }

  refresh(): void {
    window.location.reload();
}

}
