import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, switchMap, mergeMap, filter } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    constructor(private $actions: Actions, private router: Router) {}

    @Effect({dispatch: false})
    authLogout = this.$actions.ofType(AuthActions.LOGOUT)
        .pipe(map(() => {
            localStorage.setItem('auth', JSON.stringify({authenticated: false, token: null}));
            this.router.navigate(['']);
        }));

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
            mergeMap((token: string) => {
                this.router.navigate(['dashboard']);
                return [{
                    type: AuthActions.SIGNIN,
                    payload: token
                }, {
                    type: AuthActions.STORE_AUTH,
                    payload: {token: token, authenticated: true}
                }];
            })
        );

    @Effect({dispatch: false})
    authStore = this.$actions.ofType(AuthActions.STORE_AUTH)
        .pipe(map((action: AuthActions.StoreAuth) => {
            return action.payload;
        }),
        map((authData: {token: string, authenticated: boolean}) => {
            localStorage.setItem('auth', JSON.stringify(authData));
        }));

    @Effect()
    authRestore = this.$actions.ofType(AuthActions.RESTORE_AUTH)
        .pipe(map(() => {
            return JSON.parse(localStorage.getItem('auth'));
        }),
        filter((authData: {token: string, authenticated: boolean}) => {
            return authData.authenticated;
        }),
        map((authData: {token: string, authenticated: boolean}) => {
            this.router.navigate(['dashboard']);
            return {
                type: AuthActions.SIGNIN,
                payload: authData.token
            };
        }));
}
