import { Action } from '@ngrx/store';
import { Order } from '../../shared/order.model';

export const SET_ORDERS = 'SET_ORDERS';
export const TRY_GET_ORDERS = 'TRY_GET_ORDERS';
export const TRY_UPDATE_ORDER = 'TRY_UPDATE_ORDER';

export class SetOrders implements Action {
    readonly type = SET_ORDERS;

    constructor(public payload: Order[]) {}
}


export class TryGetOrders implements Action {
    readonly type = TRY_GET_ORDERS;
}

export class TryUpdateOrder implements Action {
    readonly type = TRY_UPDATE_ORDER;

    constructor(public payload: {order: Order, id: number}) {}
}

export type DashboardActions = SetOrders | TryGetOrders | TryUpdateOrder;
