import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { OrderComponent } from './dashboard/order/order.component';

const appRoutes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'dashboard', component: OrdersComponent},
    {path: 'dashboard/:id', component: OrderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
