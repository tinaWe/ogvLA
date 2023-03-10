import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projekt-template',
  templateUrl: './projekt-template.component.html',
  styleUrls: ['./projekt-template.component.scss']
})
export class ProjektTemplateComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  dataprojekt = [
    {
      title: 'Tipp 1',
      text: 'Hier könnte ihr Beschreibungstext stehen.',
      img: '../../../assets/img/background_ib_2.jpg',
      img2: '../../../assets/img/history2.jpg',
      link: 'https://www.beispielLink.de',
      cardType: 'cardStyle1'
    },];
}
