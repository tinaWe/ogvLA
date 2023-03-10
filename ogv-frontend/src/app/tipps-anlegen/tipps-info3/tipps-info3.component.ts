import { Component, Input, OnInit } from '@angular/core';
import { Tipps } from 'src/app/_interfaces/tipps';
import { TippsService } from 'src/services/tipps.service';

@Component({
  selector: 'app-tipps-info3',
  templateUrl: './tipps-info3.component.html',
  styleUrls: ['./tipps-info3.component.scss']
})
export class TippsInfo3Component implements OnInit {

  public titleTipps3 : string;
  public beschreibungTipps3 : string;
  public linkTipps3 : string;

  @Input() tipps$ : Tipps;
  constructor(private tippService : TippsService) { }

  ngOnInit(): void {
  }

  tippNew: Tipps = {
    id : 0,
    title : '',
    beschreibung : '',
    link: '',
    cardType: 'cardstyle3'
  };

  submitTipp3(){
    this.tippNew.title = this.titleTipps3;
    this.tippNew.beschreibung = this.beschreibungTipps3;
    this.tippNew.link = this.linkTipps3;
    this.tippService.createTipp(this.tippNew).subscribe(() =>
    {     this.refresh();
      });
      console.log(this.tippNew);
   }

   refresh(): void {
    window.location.reload();
}

}
