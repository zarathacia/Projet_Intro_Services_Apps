import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';

const Routing: Routes = [
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.modules').then((m) => m.CartModule),
  },
  {
    path :'order',
    loadChildren: () =>
      import ('./order/order.modules').then((m) => m.OrderModule)
 
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'item',
    loadChildren: () =>
      import('./item/item.module').then((m) => m.ItemModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'providerlist',
    loadChildren: () =>
      import('./provider-list/provider-list.module').then((m) => m.ProviderListModule),
  },
  {
    path: 'providerdetails',
    loadChildren: () =>
      import('./provider-details/provider-details.module').then((m) => m.ProviderDetailsModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },

  {
    path:'product/:id',
    component:ProductComponent 

  },
  {
    path:'providerdetails/:id',
    component:ProviderDetailsComponent

  },
 /* {
    path:'Services/ItemService',
    component:ItemService

  },*/
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
