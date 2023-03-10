import { Component, Input, OnInit } from '@angular/core';
import { Tipps } from 'src/app/_interfaces/tipps';
import { TippsService } from 'src/services/tipps.service';

@Component({
  selector: 'app-tipps-info2',
  templateUrl: './tipps-info2.component.html',
  styleUrls: ['./tipps-info2.component.scss']
})

export class TippsInfo2Component implements OnInit {

  public titleTipps2 : string;
  public beschreibungTipps2 : string;
  public linkTipp2 : string;
  @Input() tipps$ : Tipps;
  
  constructor(private tippService : TippsService) { }

  ngOnInit(): void {
  }

  tippNew: Tipps = {
    id : 0,
    title : '',
    beschreibung : '',
    link: '',
    cardType: 'cardstyle2'
  };

  submitTipp2(){
    this.tippNew.title = this.titleTipps2;
    this.tippNew.beschreibung = this.beschreibungTipps2;
    this.tippNew.link = this.linkTipp2;
    this.tippService.createTipp(this.tippNew).subscribe(() =>
    {     this.refresh();
      });
      console.log(this.tippNew);
   }

   refresh(): void {
    window.location.reload();
}
}
