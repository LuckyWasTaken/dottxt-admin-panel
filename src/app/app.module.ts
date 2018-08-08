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

@NgModule({
   declarations: [
      AppComponent,
      AuthComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([AuthEffects]),
      !environment.production ? StoreDevtoolsModule.instrument() : []
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
