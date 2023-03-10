import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mitglieder',
  templateUrl: './mitglieder.component.html',
  styleUrls: ['./mitglieder.component.scss']
})
export class MitgliederComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
