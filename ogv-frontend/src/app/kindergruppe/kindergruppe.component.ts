import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'kindergruppe',
  templateUrl: './kindergruppe.component.html',
  styleUrls: ['./kindergruppe.component.scss'],
})
export class KindergruppeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
