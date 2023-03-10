import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { CardsService } from 'src/services/cards.service';
import { Card } from '../_interfaces/card';
import { Eventpingcard } from '../_interfaces/eventpingcard';
import { EventpingcardS } from '../_interfaces/eventpingcard-s';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss']
})
export class StartseiteComponent implements OnInit {

  public $cardShown : Card[];
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  public cardShown$: Observable<Card[]>; //| undefined 
  cardsShown: Card[] = [];
  
  constructor(private route: ActivatedRoute, private cardsService: CardsService) {
    // this.$cardShown = [
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
    //   }
    // ]
   }

  //  public activeSlideIndex: number = 0;
  //  public noWrapSlides:boolean = false;

  //  activeSlideChange(){
  //      console.log(this.activeSlideIndex);
  //  }

  
  // public cardShown : Card[];
   ngOnInit(): void {
    this.cardShown$ = this.cardsService.getCards();
    this.cardsService.getCards()
    .subscribe(cards => {
        this.$cardShown = cards as Card[]
    });
    
    // this.cardsService
    // .getCards()
    // .subscribe(cards => {
    //     let hash = {};
    //     for (let card of cards) {
    //         if (!hash[card.idCard]) {
    //             hash[card.idCard] = [];
    //         }
    //         hash[card.idCard].push(card);
    //     }
    //     this.slides = Object.keys(hash).map(idCard => {
    //         return {
    //             idCard,
    //             Cards: hash[idCard]
    //         };
    //     });
    // });

    // this.slides = this.chunk(this.$cardShown, 4);
    // this.arr(3);
  }

  // slides: any = [[]];
  // public chunk(arr: Card[], chunkSize: any) {
  //   let R = [];
  //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
  //     R.push(arr.slice(i, i + chunkSize));
  //   }
  //   return R;
  // }

  // private ca : Card[];
  // public arr(chunkSize: any){
  //   for(let t = 0, leng = this.$cardShown.length/3; t < leng +1; t++){
  //     for (let i = 0, len = this.$cardShown.length; i < len; i += chunkSize) {
  //       this.slides$[(this.ca.slice(i, i + chunkSize)), t];
  //     }
  //   }
  // }


// ngOnInit() {
//     this.paramService.typesPlan$.suscribe((status)=> this.status = status); 
//     this.plans$ = this.planService.plans$; 
//     this.paramService.loadAll('plan'); //this load all the status in an async way.
//     this.planService.loadAll(); //the same as above and it work.
// }


  // chunk(arr: Card[], chunkSize: any) {
  //   let R = [];
  //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
  //     R.push(arr.slice(i, i + chunkSize));
  //   }
  //   return R;
  // }

  //ping empfangen
  // public publish(event: EventpingcardS): void{
  //   console.log(event.label);
  //   if('publish' === event.label){

  //     for(let i=0; i < event.object.length; i++){
  //       this.ping.emit(event.object[1]);
  //       console.log(event.label);
  //       this.$cardShown.push(event.object[i])
  //     }
  //     // this.$cardShown.push(event.object);
  //   }
  // }

  // //ping empfangen
  // public update(event: Eventpingcard): void{
  //   console.log(event);
  //   if('showCard' === event.label){

  //     // for(let i=0; i < this.$cardWorks.length; i++){
  //     //   this.$cardShown.push(this.$cardWorks[i])
  //     // }
  //     this.$cardShown.push(event.object);
  //   }
  // }

}
