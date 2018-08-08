import { Action } from '@ngrx/store';

export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';

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

export type AuthActions = TrySignin | Signin | Logout;
