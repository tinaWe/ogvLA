import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProjektTemplateComponent } from '../projekt-template.component';
import { Projektstyle1Component } from '../projekt-templates/projektstyle1/projektstyle1.component';
import { Projektstyle2Component } from '../projekt-templates/projektstyle2/projektstyle2.component';

@Component({
  selector: 'app-projekt-grid-item',
  templateUrl: './projekt-grid-item.component.html',
  styleUrls: ['./projekt-grid-item.component.scss']
})
export class ProjektGridItemComponent implements OnInit {

  @Input() data: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  readonly templateMapper = {
    projektStyle1: Projektstyle1Component,
    projektStyle2: Projektstyle2Component,
  };

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForCardType(this.data.cardType));
    // const viewContainerRef = this.container;
    // viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(this.getComponentForCardType(this.data.cardType));
    (<ProjektTemplateComponent>componentRef.instance).dataprojekt = this.data;
  }
  private getComponentForCardType(cardType) {
    return this.templateMapper[cardType];
  }

}
