import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipps-anlegen',
  templateUrl: './tipps-anlegen.component.html',
  styleUrls: ['./tipps-anlegen.component.scss']
})
export class TippsAnlegenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cardStyle = 1;
    this.option1 = true;
  }

  public cardStyle : number;

  option1 : boolean;
  option2 : boolean;
  option3 : boolean;

  public cardCheck(boxnummer: number){
    if(boxnummer == 1){
      this.option2 = false;
      this.option3 = false;
      this.option1 = true;
    }else if(boxnummer == 2){
      this.option1 = false;
      this.option3 = false;
      this.option2 = true;
    }else{
      this.option1 = false;
      this.option2 = false;
      this.option3 = true;
    }
    this.cardStyle = boxnummer;
  }

}
