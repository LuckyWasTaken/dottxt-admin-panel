import { Action } from '@ngrx/store';
import { Order } from '../../shared/order.model';
import { StockItem } from '../../shared/stock-item.model';

export const SET_ORDERS = 'SET_ORDERS';
export const TRY_GET_ORDERS = 'TRY_GET_ORDERS';
export const TRY_UPDATE_ORDER = 'TRY_UPDATE_ORDER';
export const TRY_GET_ITEMS = 'TRY_GET_ITEMS';
export const TRY_ADD_ITEM = 'TRY_ADD_ITEM';
export const TRY_UPDATE_ITEM = 'TRY_UPDATE_ITEM';
export const TRY_DELETE_ITEM = 'TRY_DELETE_ITEM';
export const SET_ITEMS = 'SET_ITEMS';

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

export class TryGetItems implements Action {
    readonly type = TRY_GET_ITEMS;
}

export class TryAddItem implements Action {
    readonly type = TRY_ADD_ITEM;

    constructor(public payload: StockItem) {}
}

export class TryUpdateItem implements Action {
    readonly type = TRY_UPDATE_ITEM;

    constructor(public payload: {id: number, item: StockItem}) {}
}

export class TryDeleteItem implements Action {
    readonly type = TRY_DELETE_ITEM;

    constructor(public payload: number) {}
}

export class SetItems implements Action {
    readonly type = SET_ITEMS;

    constructor(public payload: StockItem[]) {}
}


export type DashboardActions = SetOrders |
 TryGetOrders |
 TryUpdateOrder|
 TryAddItem|
 TryDeleteItem|
 TryGetItems|
 TryUpdateItem|
 SetItems;
