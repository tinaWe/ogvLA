import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datenschutzerklaerung',
  templateUrl: './datenschutzerklaerung.component.html',
  styleUrls: ['./datenschutzerklaerung.component.scss']
})
export class DatenschutzerklaerungComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
