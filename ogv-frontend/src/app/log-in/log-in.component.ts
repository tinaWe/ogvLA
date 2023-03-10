import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  emailLogIn: string;
  passwordLogIn: string;
  // form: FormGroup;
  success: boolean;
  title: string | null = null;
  constructor(public modalLogIn: MdbModalRef<LogInComponent>, 
    // private formBuilder: FormBuilder,
    private userService : UserService) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   email: '',
    //   password: ''
    // });
  }

  submit(): void{
    //get password and email
    const body = {email: this.emailLogIn, password: this.passwordLogIn};
    console.log(body);
    this.userService.loginAccount(body);
  }


  close(): void {
    const closeMessage = 'Modal closed';
    this.modalLogIn.close(closeMessage)
  }
}
