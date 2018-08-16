import { ActionReducerMap } from '@ngrx/store';


import * as fromAuth from '../auth/store/auth.reducers';
import * as fromDashboard from '../dashboard/store/dashboard.reducers';

export interface AppState {
  auth: fromAuth.State;
  dashboard: fromDashboard.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  dashboard: fromDashboard.dashboardReducer
};
