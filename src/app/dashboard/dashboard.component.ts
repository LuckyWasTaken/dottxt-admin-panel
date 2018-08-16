import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { Logout } from '../auth/store/auth.actions';
import { TryGetOrders } from './store/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ordersState = this.store.select('dashboard');

  ngOnInit() {
    this.store.dispatch(new TryGetOrders());
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
