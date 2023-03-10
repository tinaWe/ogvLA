import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbAbstractFormControl } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-interner-bereich',
  templateUrl: './interner-bereich.component.html',
  styleUrls: ['./interner-bereich.component.scss']
})
export class InternerBereichComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  logOut() {

  }
}
