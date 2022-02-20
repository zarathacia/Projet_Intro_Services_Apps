import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ItemComponent } from './item/item.component';
import { ProductComponent } from './product/product.component';
import { ListsComponent } from './lists/lists.component';
import { MixedComponent } from './mixed/mixed.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsExamplesComponent } from './widgets-examples.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsExamplesComponent,
    children: [
      {
        path: 'lists',
        component: ListsComponent,
      },
      {
        path: 'item',
        component: ItemComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: 'mixed',
        component: MixedComponent,
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'feeds',
        component: FeedsComponent,
      },
      { path: '', redirectTo: 'lists', pathMatch: 'full' },
      { path: '**', redirectTo: 'lists', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetsExamplesRoutingModule {}
