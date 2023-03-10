import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geraete-ausleihe',
  templateUrl: './geraete-ausleihe.component.html',
  styleUrls: ['./geraete-ausleihe.component.scss']
})
export class GeraeteAusleiheComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
