import { Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Tipps } from 'src/app/_interfaces/tipps';
import { CardTemplateBaseComponent } from '../card-templates/card-template-base';
import { Cardstyle1Component } from '../card-templates/cardstyle1/cardstyle1.component';
import { Cardstyle2Component } from '../card-templates/cardstyle2/cardstyle2.component';
import { Cardstyle3Component } from '../card-templates/cardstyle3/cardstyle3.component';
import {compileComponentFromMetadata} from'@angular/compiler';

@Component({
  selector: 'app-tipps-grid-item',
  templateUrl: './tipps-grid-item.component.html',
  styleUrls: ['./tipps-grid-item.component.scss']
})
export class TippsGridItemComponent implements OnInit {

  // @Input() data: any;
  @Input() data: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  readonly templateMapper = {
    cardstyle1: Cardstyle1Component,
    cardstyle2: Cardstyle2Component,
    cardstyle3: Cardstyle3Component
  };

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    console.log(this.data);
    console.log(this.data.cardType);

    if(this.getComponentForCardType(this.data.cardType) != undefined){
    //   if(String(this.data.cardType) === "cardstyle1"){
    //   const componentRef = this.viewContainerRef.createComponent(Cardstyle1Component);  
    //   console.log(componentRef);   
    //   (<CardTemplateBaseComponent>componentRef.instance).data = this.data;  
    //   }else if(String(this.data.cardType) === "cardstyle2"){
    //     const componentRef = this.viewContainerRef.createComponent(Cardstyle2Component);  
    //     console.log(componentRef);   
    //     (<CardTemplateBaseComponent>componentRef.instance).data = this.data;  
    //   } else if(String(this.data.cardType) === "cardstyle3"){
    //     const componentRef = this.viewContainerRef.createComponent(Cardstyle3Component);  
    //     console.log(componentRef);   
    //     (<CardTemplateBaseComponent>componentRef.instance).data = this.data;  
    //  }else{
    //       console.log("componentRef funktioniert nicht");
    //     }
      const componentRef = this.viewContainerRef.createComponent(this.getComponentForCardType(this.data.cardType));  
      console.log(componentRef);   
         (<CardTemplateBaseComponent>componentRef.instance).data = this.data;  
    }
   
      console.log("test");


    // this.viewContainerRef.detach();
    // this.viewContainerRef.clear();
  }

  private getComponentForCardType(cardType){
    console.log(cardType);
    return this.templateMapper[cardType];
  }
  
}



