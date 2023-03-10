import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';
import { CardsService } from 'src/services/cards.service';
import { Card } from '../_interfaces/card';
import { Eventpingcard } from '../_interfaces/eventpingcard';
import { EventpingcardS } from '../_interfaces/eventpingcard-s';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public $cardWorks : Card[];
  count : number;
  public saveCard : Card[];
  public $singleCard : Card;
  private newCard : Card;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  public cards$: Observable<Card[]>; //| undefined

  cards: Card[] = [];

  constructor(private cardsService: CardsService) { 
    // this.$cardWorks = [
    //   {
    //     idCard : 0,
    //     title : 'liste',
    //     beschreibung : 'details',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'neumarkt',
    //     veranstalter: 'renate'
    //   },
    //   {
    //     idCard : 1,
    //     title : 'test',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'amberg',
    //     veranstalter: 'renate'
    //   },
    //   {
    //     idCard : 2,
    //     title : 'leben',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'nürnberg',
    //     veranstalter: 'renate'
    //   },
    //   {
    //     idCard : 3,
    //     title : 'yess',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'amberg',
    //     veranstalter: 'renate'
    //   }
    //   ,  {
    //     idCard : 4,
    //     title : 'test',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'amberg',
    //     veranstalter: 'renate'
    //   }
    //   ,
    //   {
    //     idCard : 5,
    //     title : 'test',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'amberg',
    //     veranstalter: 'renate'
    //   },
    //   {
    //     idCard : 6,
    //     title : 'test',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'nürnberg',
    //     veranstalter: 'renate'
    //   },
    //   {
    //     idCard : 7,
    //     title : 'test',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'amberg',
    //     veranstalter: 'renate'
    //   },
    //   {
    //     idCard : 8,
    //     title : 'dieben',
    //     beschreibung : 'details abc',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'amberg',
    //     veranstalter: 'renate'
    //   },
    //   {
    //     idCard : 9,
    //     title : 'last',
    //     beschreibung : 'last',
    //     datum: new Date("Fri Dec 08 2019 07:44:57"),
    //     ort : 'last',
    //     veranstalter: 'last'
    //   }
    // ];

    this.$singleCard = {
      id : undefined,//change
      title : undefined,
      beschreibung : undefined,
      datum: new Date(),
      ort : undefined,
      veranstalter: undefined
    }
  }
  
  ngOnInit(): void {
    //first try of backend
    this.cards$ = this.cardsService.getCards();
  
    //second try of backend
    // this.getCards();
    // this.$cardWorks = this.cardsService.getCards();
    
    // this.cardsService.getCards().subscribe(cards => {
    //     this.$cardWorks  = cards as Card[];
    //     console.log(this.cards$,'this');
    // }); 

    // this.slides = this.chunk(this.$cardWorks , 3);
   
    // this.cardsService.getCards().subscribe((cards: Card[]) => {
    // this.$cardWorks = cards;
    // this.saveCard = this.$cardWorks;
    // console.log(this.$cardWorks,'this');
    // }).unsubscribe();

    // this.chunkObservable();
    // this.slidesAsync = this.chunkAsync(this.cards$, 3);
    // this.slides = this.chunk(this.$cardWorks, 3);
    // this.getCards();
  }

  private getCards(){
    this.cardsService.getCards()
    .subscribe(
      res => {
        this.cards = res;
      },
      err => console.log(err)
    )
  }


  // public getCards(){
  //   this.cardsService.getCards().subscribe(cards => {
  //     this.$cardWorks  = cards as Card[]
  //     console.log(this.$cardWorks,'this');
  // });

  // console.log(this.$cardWorks,'next');
  // }


  public update(event: Eventpingcard): void{
    console.log(event);
    if('safeCard' === event.label){

      // for(let i=0; i < this.$cardWorks.length; i++){
      //   this.$cardShown.push(this.$cardWorks[i])
      // this.$cardWorks.splice(this.$cardWorks.indexOf(event.object),1);
      //die obere Zeile funktioniert nicht
    }
  }

  
  //ping senden => für diesen Button kein Ping sondern ein Service
  // public publish(event?: any): void{  
  //   const eventObjects: EventpingcardS = {
  //     label: 'publish',
  //     object: this.$cardWorks
  //   }
  //   console.log(eventObjects);
  //   this.ping.emit(eventObjects);
  // }

    //ping senden für create a new card
    // public createCard(event?: any): void{ 
    //   this.newCard = this.$singleCard;
    //   this.newCard.idCard = (this.$cardWorks.length - 1);
    //   console.log(this.$cardWorks.length -1)
    //   this.$cardWorks.push(this.newCard);
    //   console.log(this.$cardWorks);
    //   const eventObject: Eventpingcard = {
    //     label: 'createCard',
    //     object: this.$cardWorks[this.$cardWorks.length-1]
    //   }
    //   console.log(eventObject.label);
    //   this.ping.emit(eventObject);
    // }

    public createCard(event: any): void{
      // this.count = this.cards$.pipe.valueOf.length;
      this.cardsService.createCard(this.$singleCard).subscribe(() =>
    {     this.refresh();
      });
  
    // this.getCards();
    // console.log(this.cards.length);

    
      // this.newCard = this.$singleCard;
      // this.newCard.idCard = (this.$cardWorks.length + 1);
      // this.$cardWorks.push(this.newCard);
      // // const eventObject : Eventpingcard = {
      // //   label: 'createCard',
      // //   object: this.newCard
      // // }
      // this.ping.emit(this.newCard);
    }

    refresh(): void {
      window.location.reload();
  }

    // empfangen des Create
    // public create(event: Card): void{
    //   this.$cardWorks.push(this.newCard);
    // }

    // slides: any = [[]];
    // chunk(arr: any, chunkSize: any) {
    //   let R = [];
    //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
    //     R.push(arr.slice(i, i + chunkSize));
    //   }
    //   return R;
    // }

    public slide: Card[];
    public saveSlide: Card[];

    public split(input: number, card: Card) {
      let T = [];
      if((input + 1 % 3) !== 0){ //Zahl NICHT gerade durch 3 teilbar
        this.slide.push(card);
      }else if((input + 1 % 3) == 0){//Zahl gerade durch 3 teilbar
        T = this.slide;
        this.slide = null;
        return T;
      }else{
        return null;
      }
    }
}