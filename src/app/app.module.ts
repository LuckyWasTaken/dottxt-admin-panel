import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { environment } from '../environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardEffects } from './dashboard/store/dashboard.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './dashboard/order/order.component';

@NgModule({
   declarations: [
      AppComponent,
      AuthComponent,
      DashboardComponent,
      OrderComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([AuthEffects, DashboardEffects]),
      !environment.production ? StoreDevtoolsModule.instrument() : []
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
