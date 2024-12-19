import { Inject, Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, of } from 'rxjs'
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutSuccess,
} from './authentication.actions'
import { AuthenticationService } from '@core/services/auth.service'

@Injectable()
export class AuthenticationEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(({ Number, password }) => {
        return this.authService.login(Number, password).pipe(
          map((user:any) => {
            if (user) {
              const returnUrl =
                this.route.snapshot.queryParams['returnUrl'] || '/'
              this.router.navigateByUrl(returnUrl)
            }
            return loginSuccess({ user })
          }),
          catchError((error) => {
            console.error('Login failed:', error); // Log the error here
            return of(loginFailure({ error }));
          })
        )
      })
    )
  )

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      exhaustMap(() => {
        this.authService.logout()
        this.router.navigate(['/auth/sign-in'])
        return of(logoutSuccess())
      })
    )
  )

  constructor(
    @Inject(Actions) private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
