import * as DashboardActions from './dashboard.actions';
import { Order } from '../../shared/order.model';
import { StockItem } from '../../shared/stock-item.model';

export interface State {
    orders: Order[];
    items: StockItem[];
}

const initialState = {
    orders: [],
    items: []
};

export function dashboardReducer(state = initialState, action: DashboardActions.DashboardActions) {
    switch (action.type) {
        case DashboardActions.SET_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case DashboardActions.SET_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
