import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { AddAccountModalComponent } from '../add-account-modal/add-account-modal.component';
import { EditAccountModalComponent } from '../edit-account-modal/edit-account-modal.component';
import { User } from '../_interfaces/user';

@Component({
  selector: 'app-uebersicht-konten',
  templateUrl: './uebersicht-konten.component.html',
  styleUrls: ['./uebersicht-konten.component.scss']
})
export class UebersichtKontenComponent implements OnInit {

  public accounts$ :  Observable<any>;
  accounts : User[] = [];
  account : User;
  data : number;
  modalRefAddAccount: MdbModalRef<AddAccountModalComponent> | null = null;
  modalRefEditAccount: MdbModalRef<EditAccountModalComponent> | null = null;
 public idForChange : number;

  constructor(private userService: UserService, private modalService: MdbModalService) {
    // this.accounts = [
    //   {
    //     idAccount : 0,
    //     name : 'Renate Meier',
    //     address: 'renate.meier@gmail.com',
    //     password : '*******',
    //     position: 'Vorstand',
    //   },
    //   {
    //     idAccount : 0,
    //     name : 'Katharina Atzmannsdorfer',
    //     address: 'katharina.atzmannsdorfe@gmail.com',
    //     password : '*******',
    //     position: 'Kindergruppe',
    //   }
    // ]
   }

  ngOnInit(): void {
    this.accounts$ = this.userService.getAccounts()
  }


  // public update(event: Eventpingcard): void{
  //   console.log(event);
  //   if('safeCard' === event.label){

  //     // for(let i=0; i < this.$cardWorks.length; i++){
  //     //   this.$cardShown.push(this.$cardWorks[i])
  //     // this.$cardWorks.splice(this.$cardWorks.indexOf(event.object),1);
  //     //die obere Zeile funktioniert nicht
  //   }
  // }


  openAddAccountModal() {
    this.modalRefAddAccount = this.modalService.open(AddAccountModalComponent)
  }

 
  //Erster Ansatz
  openEditAccountModal(inputIndex : number) {
    // this.userService.getAccounts().subscribe(account => this.accounts = account as User[]);
    // this.account = this.accounts[inputIndex];
    // this.idForChange = this.account.id;
    console.log(inputIndex);
    // console.log(this.idForChange);
    this.modalRefEditAccount = this.modalService.open(EditAccountModalComponent, {
      data: {idEditAcccount: inputIndex},
    });
  }

  //zweiterAnsatz
  // private openEditAccountModal(account: User): void {
  //   const dialogRef = this.dialog.open(EditAccountModalComponent, {
  //     data: { action: 'edit', account }
  //   });
  //   dialogRef
  //     .afterClosed()
  //     .pipe(
  //       filter((result: MtAction) => result && result.type === 'edit'),
  //       map((result: MtAction) => result.payload),
  //       mergeMap((updateUser: User) =>
  //         this.userService.updateAccount(updateUser.idUser, updateUser)
  //       ),
  //       take(1)
  //     )
  //     .subscribe(() => this.refresh$.next(''));
  // }

}
