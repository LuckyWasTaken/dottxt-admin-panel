import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { config } from './shared/firebase';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import { RestoreAuth } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: config.apiKey,
      authDomain: config.authDomain
    });

    this.store.dispatch(new RestoreAuth());
  }
}
