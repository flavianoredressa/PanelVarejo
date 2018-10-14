import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartamentoRoutingModule } from './apartamento-routing.module';
import { ApartementoComponent } from './apartemento.component';
//modal
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    ApartamentoRoutingModule,
    NgbModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      space:-3,
      radius:30,
      outerStrokeWidth:3,
      innerStrokeWidth:3,
      backgroundOpacity: 1,
      animationDuration:300,
      backgroundColor: "transparent",
      backgroundStroke: "transparent",
      outerStrokeColor: "#4882c2",
      innerStrokeColor: "#e7e8ea",
      titleColor: "#fff",
      unitsColor: "#fff",
      subtitleColor: "#fff",
      showSubtitle:false,
      clockwise:true,
      animation:true,
    })
  ],
  declarations: [ApartementoComponent]
})
export class ApartamentoModule { }
