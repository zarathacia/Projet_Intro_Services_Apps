import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderDetailsComponent } from './provider-details.component';
import { RouterModule } from '@angular/router';
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
    WidgetsModule,
    CardsModule,
  ]
})
export class ProviderDetailsModule { }
