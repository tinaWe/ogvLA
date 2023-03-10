import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projekt-grid',
  templateUrl: './projekt-grid.component.html',
  styleUrls: ['./projekt-grid.component.scss']
})
export class ProjektGridComponent implements OnInit {

  @Input() items: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
