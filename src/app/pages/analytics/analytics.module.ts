import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EngraisComponent } from './engrais/engrais.component';
import { PesticidesComponent } from './pesticides/pesticides.component';
import { RouterModule } from '@angular/router';
import { FongiComponent } from './fongi/fongi.component';
import { InsectComponent } from './insect/insect.component';
import { HerbComponent } from './herb/herb.component';



@NgModule({
  declarations: [EngraisComponent, PesticidesComponent, FongiComponent, InsectComponent, HerbComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EngraisComponent,
      },
      {
        path: 'engrais',
        component: EngraisComponent,
      },
      {
        path: 'engrais',
        component: PesticidesComponent,
      },


    ]),
    WidgetsModule,
    FormsModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
  ]
})
export class AnalyticsModule { }


