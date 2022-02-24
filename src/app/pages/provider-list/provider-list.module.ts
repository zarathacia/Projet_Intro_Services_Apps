import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './provider-list.component';
import { RouterModule } from '@angular/router';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';



@NgModule({
  declarations: [
    ProviderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:ProviderListComponent,
      },
    ]),
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
  ]
})
export class ProviderListModule { }
