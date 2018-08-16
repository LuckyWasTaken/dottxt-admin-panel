import { Action } from '@ngrx/store';
import { Order } from '../../shared/order.model';

export const SET_ORDERS = 'SET_ORDERS';
export const PUSH_ORDERS = 'PUSH_ORDERS';
export const TRY_GET_ORDERS = 'TRY_GET_ORDERS';

export class SetOrders implements Action {
    readonly type = SET_ORDERS;

    constructor(public payload: Order[]) {}
}

export class PushOrders implements Action {
    readonly type = PUSH_ORDERS;
}

export class TryGetOrders implements Action {
    readonly type = TRY_GET_ORDERS;
}

export type DashboardActions = SetOrders | PushOrders | TryGetOrders;
