import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetsModule } from '../../_metronic/partials';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:ItemComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class ItemModule {}