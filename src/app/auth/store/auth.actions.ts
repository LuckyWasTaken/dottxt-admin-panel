import { Action } from '@ngrx/store';

export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const RESTORE_AUTH = 'RESTORE_AUTH';
export const STORE_AUTH = 'STORE_AUTH';

export class TrySignin implements Action {
    readonly type = TRY_SIGNIN;

    constructor(public payload: {username: string, password: string}) {}
}

export class Signin implements Action {
    readonly type = SIGNIN;

    constructor(public payload: {token: string}) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class RestoreAuth implements Action {
    readonly type = RESTORE_AUTH;
}

export class StoreAuth implements Action {
    readonly type = STORE_AUTH;

    constructor(public payload: {token: string, authenticated: boolean}) {}
}

export type AuthActions = TrySignin
 | Signin
 | Logout
 | RestoreAuth
 | StoreAuth;
