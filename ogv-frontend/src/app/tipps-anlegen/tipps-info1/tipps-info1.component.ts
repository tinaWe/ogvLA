import { Component, Input, OnInit } from '@angular/core';
import { Tipps } from 'src/app/_interfaces/tipps';
import { TippsService } from 'src/services/tipps.service';

@Component({
  selector: 'app-tipps-info1',
  templateUrl: './tipps-info1.component.html',
  styleUrls: ['./tipps-info1.component.scss']
})
export class TippsInfo1Component implements OnInit {

  public titleTipps1 : string;
  public beschreibungTipps1 : string;
  public linkTipp1 : string;



  @Input() tipps$ : Tipps;
  constructor(private tippService : TippsService) { }

  ngOnInit(): void {
  }

  tippNew: Tipps = {
    id : 0,
    title : '',
    beschreibung : '',
    link: '',
    cardType: 'cardstyle1'
  };

  submitTipp(){
    this.tippNew.title = this.titleTipps1;
    this.tippNew.beschreibung = this.beschreibungTipps1;
    this.tippNew.link = this.linkTipp1;
    this.tippService.createTipp(this.tippNew).subscribe(() =>
    {     this.refresh();
      });
      console.log(this.tippNew);
   }

   refresh(): void {
    window.location.reload();
}

}
