import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TippsService } from 'src/services/tipps.service';
import { Tipps } from '../_interfaces/tipps';

@Component({
  selector: 'app-tipps-andtricks',
  templateUrl: './tipps-andtricks.component.html',
  styleUrls: ['./tipps-andtricks.component.scss']
})
export class TippsAndtricksComponent implements OnInit {

  public $tipp : Tipps[];
  constructor(private route: ActivatedRoute, private tippService : TippsService) { }

  ngOnInit(): void {
    // this.tipp$ = this.tippService.getTipps();
    this.tippService.getTipps()
    .subscribe(tipps => {
        this.$tipp = tipps as Tipps[]
    });
  }
  //  data = [
  //   {
  //     title: 'Tipp 1',
  //     text: 'Hier könnte ihr Beschreibungstext stehen.',
  //     img: '../../../assets/img/background_ib_2.jpg',
  //     img2: '../../../assets/img/history2.jpg',
  //     link: 'https://www.beispielLink.de',
  //     cardType: 'cardStyle1'
  //   },
  //   {
  //     title: 'Tipp 2',
  //     text: 'Hier steht die Beschreibung.',
  //     link: 'https://www.beispielLink.de',
  //     cardType: 'cardStyle2'
  //   },
  //   {
  //     title: 'Tipp 3',
  //     text: 'Hier könnte ihr Beschreibungstext stehen',
  //     img: '../../../assets/img/yellowFlower.jpg',
  //     link: 'https://www.beispielLink.de',
  //     cardType: 'cardStyle3'
  //   },
  //   {
  //     text: 'You miss 100% of shots you don\'t take. --Wayne Gretzky',
  //     subtext: 'Michael Scott',
  //     cardType: 'cardStyle2'
  //   },
  //   {
  //     title: 'YOLO',
  //     text: 'False, you live everyday. You only die once. YODO.',
  //     img: 'https://s3-eu-west-1.amazonaws.com/calyx-test-bucket/michael.jpg',
  //     img2: 'https://s3-eu-west-1.amazonaws.com/calyx-test-bucket/michael.jpg',
  //     link: 'https://www...',
  //     cardType: 'cardStyle1'
  //   },
  //   {
  //     title: 'Tipp 2',
  //     text: 'Hier.',
  //     link: 'https:',
  //     cardType: 'cardStyle2'
  //   }
  // ];
}
