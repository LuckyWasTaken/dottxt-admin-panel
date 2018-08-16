import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as DashboardActions from './dashboard.actions';
import { map, switchMap, filter } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { config } from '../../shared/firebase';
import { Order } from '../../shared/order.model';


@Injectable()
export class DashboardEffects {

    constructor(private $actions: Actions, private http: HttpClient) {}

    @Effect()
    getOrders = this.$actions.ofType(DashboardActions.TRY_GET_ORDERS)
        .pipe(
            switchMap(() => {
                return this.http.get<Order[]>(`${config.databaseURL}/orders.json`);
            }),
            map((response: Order[]) => {
                return {
                    type: DashboardActions.SET_ORDERS,
                    payload: response
                };
            })
        );
}
