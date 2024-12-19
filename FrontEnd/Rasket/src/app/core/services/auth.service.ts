import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { CookieService } from 'ngx-cookie-service'
import type { User } from '@/app/helper/fake-backend'
import type { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: User | null = null

  public readonly authSessionKey = '_RASKET_AUTH_SESSION_KEY_'

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  login(Number: string, password: string): Observable<User> {
    console.log("login no " + Number + "pass " + password)
    return this.http.post<User>(`/api/login`, { Number, password }).pipe(
      map((user) => {
        if (user && user.token) {
          this.user = user
          this.saveSession(user.token)
        }
        return user
      })
    )
  }

  logout(): void {
    this.removeSession()
    this.user = null
  }

  get session(): string {
    return this.cookieService.get(this.authSessionKey)
  }

  saveSession(token: string): void {
    this.cookieService.set(this.authSessionKey, token)
  }

  removeSession(): void {
    this.cookieService.delete(this.authSessionKey)
  }
}
