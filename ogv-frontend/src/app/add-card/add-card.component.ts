import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public create(event?: any): void{ 
    // this.$singleCard.idCard = this.$cardWorks.length -1;
    // console.log(this.$cardWorks.length -1)
    // this.$cardWorks.push(this.$singleCard);
    // const eventObject: Eventpingcard = {
    //   label: 'create',
    //   object: this.$cardWorks[this.$cardWorks.length-1]
    // }
    // console.log(eventObject.label);
    // this.ping.emit(eventObject);
  }
}
