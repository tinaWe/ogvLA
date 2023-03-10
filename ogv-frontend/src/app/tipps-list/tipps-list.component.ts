import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TippsService } from 'src/services/tipps.service';
import { Tipps } from '../_interfaces/tipps';

@Component({
  selector: 'app-tipps-list',
  templateUrl: './tipps-list.component.html',
  styleUrls: ['./tipps-list.component.scss']
})
export class TippsListComponent implements OnInit {

  tipps : Tipps[];
  public $tipp : Tipps[];
  public tipp$ : Observable<Tipps[]>;
  public searchItem : string;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(private tippService : TippsService) { 
  }

  ngOnInit() {
    this.tipp$ = this.tippService.getTipps();
    this.tippService.getTipps()
    .subscribe(tipps => {
        this.$tipp = tipps as Tipps[]
    });
  }

    transform(value: any[], ...args: any): any {
      let searchItem = ''
      if(args.length)  searchItem = args[0].toLowerCase()
      return value.filter((tipps:any)=> tipps.tipp.title.toLowerCase().includes(searchItem));
    }

    deleteTipp(input : number){
      if (confirm(`Bist du dir sicher, dass du den Tipp löschen willst?`)) {
        console.log(input);
        this.tippService.deleteTipp(input).subscribe(() => {
          this.refresh();
        });
      } 
    }

    refresh(): void {
      window.location.reload();
  }

  }


