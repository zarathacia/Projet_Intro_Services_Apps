import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetsModule } from '../../_metronic/partials';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:ProductComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class ProductModule {}