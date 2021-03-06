import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { OrderComponent } from './dashboard/order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './dashboard/items/items.component';

const appRoutes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'dashboard', component: DashboardComponent, children: [
        {path: 'orders', component: OrdersComponent},
        {path: 'orders/:id', component: OrderComponent},
        {path: 'items', component: ItemsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
