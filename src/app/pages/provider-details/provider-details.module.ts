import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderDetailsComponent } from './provider-details.component';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';



@NgModule({
  declarations: [
    ProviderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:ProviderDetailsComponent,
      },
    ]),
    DropdownMenusModule,
    InlineSVGModule,
    WidgetsModule,
    CardsModule,
  ]
})
export class ProviderDetailsModule { }
