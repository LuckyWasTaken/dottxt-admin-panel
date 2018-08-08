import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    constructor(private $actions: Actions, private router: Router) {}

    @Effect()
    authSignin = this.$actions
        .ofType(AuthActions.TRY_SIGNIN)
        .pipe(
            map((action: AuthActions.TrySignin) => action.payload),
            switchMap((authData: {email: string, password: string}) => {
                return from(firebase.auth().signInWithEmailAndPassword(authData.email, authData.password));
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            map((token: string) => {
                this.router.navigate(['dashboard']);
                return {
                    type: AuthActions.SIGNIN,
                    payload: token
                };
            })
        );

}
