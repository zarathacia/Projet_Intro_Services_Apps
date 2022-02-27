import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { NewsComponent } from './news/news.component';
import { DamsComponent } from './dams/dams.component';
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './dash/dash.component';
import { FormsModule } from '@angular/forms';
import { PluvioComponent } from './pluvio/pluvio.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DashboardComponent, NewsComponent, DamsComponent, DashComponent, PluvioComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dash',
        component: DashComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'dams',
        component: DamsComponent,
      },
      {
        path: 'pluvio',
        component: PluvioComponent,
      },

    ]),
    WidgetsModule,
    FormsModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
  ],
})
export class DashboardModule {}
