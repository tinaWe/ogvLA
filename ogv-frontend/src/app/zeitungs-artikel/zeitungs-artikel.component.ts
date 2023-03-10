import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-zeitungs-artikel',
  templateUrl: './zeitungs-artikel.component.html',
  styleUrls: ['./zeitungs-artikel.component.scss']
})
export class ZeitungsArtikelComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
