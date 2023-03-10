import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../_interfaces/card';
import { CardsService } from 'src/services/cards.service';
import { Eventpingcard } from '../_interfaces/eventpingcard';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empty-card',
  templateUrl: './empty-card.component.html',
  styleUrls: ['./empty-card.component.scss']
})
export class EmptyCardComponent {

  @Input() card$ : Card;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();
  refresh$: any;

  constructor(private cardService: CardsService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  cardNew: Card = {
    id : 0,
    title : '',
    beschreibung : '',
    datum: new Date(),
    ort: '',
    veranstalter: ''
  };

  submitCard(){
   this.cardService.createCard(this.card$)
   .subscribe(
    res => console.log(res),
    err => console.log(err)
   )
  }
  
  public deleteCard(): void{
    console.log(this.card$.id);
    // this.cardService.deleteCard(this.card$.id);
    // .subscribe(
    //   // res => {
    //   //   this.getCards();
    //   // },
    //   err => console.log(err)
    // );

    if (confirm(`Bist du dir sicher, dass du die Karte löschen willst?`)) {
      this.cardService.deleteCard(this.card$.id).subscribe(() => {
        this.refresh();
          // this.router.navigate(['/internerBereich']);
      });
  }
    console.log(this.card$.id);
  }

  //create muss hier hin
  public safeCard(): void{
    console.log(this.card$.id);
    this.cardService.updateCard(this.card$.id, this.card$).subscribe(() =>
    {     this.refresh();});
  }

  //ping senden
  // public deleteCard(event?: any): void{
  //   const eventObject: Eventpingcard = {
  //     label: 'delete',
  //     object: this.card$
  //   }
  //   this.ping.emit(eventObject);
  // }

  //ping empfangen
  // public createCard(event: Eventpingcard): void{
  //   console.log('Create emfpangen');
  //   if('createCard' === event.label){
  //     this.card$ = event.object;
  //   }
  // }

  refresh(): void {
    window.location.reload();
}


}
