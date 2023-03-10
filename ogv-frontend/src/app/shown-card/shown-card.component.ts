import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CardsService } from 'src/services/cards.service';
import { Card } from '../_interfaces/card';
import { Eventpingcard } from '../_interfaces/eventpingcard';
import { EventpingcardS } from '../_interfaces/eventpingcard-s';

@Component({
  selector: 'app-showncard',
  templateUrl: './shown-card.component.html',
  styleUrls: ['./shown-card.component.scss']
})
export class ShowncardComponent implements OnInit {

  @Input() card$ : Card;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
  }

  public showCard(event?: any): void{
    const eventObject: Eventpingcard = {
      label: 'showCard',
      object: this.card$
    }
    this.ping.emit(eventObject);
  }

}
