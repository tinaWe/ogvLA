import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: MdbModalRef<LogInComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void{

  }

  openLogIn() {
    this.modalRef = this.modalService.open(LogInComponent, { modalClass: 'modal-dialog-centered', data: { title: 'LogIn'}}); //}
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

  
}
