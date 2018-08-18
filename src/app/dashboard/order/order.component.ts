import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../store/dashboard.reducers';
import { Subscription } from 'rxjs';
import { Order } from '../../shared/order.model';
import { NgForm } from '@angular/forms';
import { TryUpdateOrder } from '../store/dashboard.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router) { }

  storeSubscription: Subscription;
  order: Order;
  id: number;

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.storeSubscription = this.store.select('dashboard').subscribe((state: State) => {
      this.order = state.orders[this.id];
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  onSave(form: NgForm) {
    const updated = {
      ...this.order,
      ...form.value
    };
    this.store.dispatch(new TryUpdateOrder({order: updated, id: this.id}));

    this.router.navigate(['/', 'dashboard', 'orders']);
  }
}
