import * as DashboardActions from './dashboard.actions';
import { Order } from '../../shared/order.model';

export interface State {
    orders: Order[];
}

const initialState = {
    orders: []
};

export function dashboardReducer(state = initialState, action: DashboardActions.DashboardActions) {
    switch (action.type) {
        case DashboardActions.SET_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        default:
            return state;
    }
}
