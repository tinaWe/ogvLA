import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tipps-grid',
  templateUrl: './tipps-grid.component.html',
  styleUrls: ['./tipps-grid.component.scss']
})
export class TippsGridComponent {

  @Input() items: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
