import { Component, inject, type OnInit } from '@angular/core';
import { LogoBoxComponent } from "../../../components/logo-box.component";
import { RouterLink } from '@angular/router';
import { SocialBtnComponent } from "../../../components/social-btn/social-btn.component";
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators, type UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '@core/services/auth.service'
import { map } from 'rxjs'
import { login } from '@store/authentication/authentication.actions'

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LogoBoxComponent, RouterLink, SocialBtnComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export class SignInComponent  implements OnInit{
  signInForm!: UntypedFormGroup
  submitted: boolean = false

  public fb = inject(UntypedFormBuilder)
  public store = inject(Store)
  public service = inject(AuthenticationService)

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      Number: ['254725699181', [Validators.required]],
      password: ['123456', [Validators.required]],
    })
  }

  get formValues() {
    return this.signInForm.controls
  }

  login() {
    this.submitted = true
    if (this.signInForm.valid) {     
      const phoneNumber = this.formValues['Number'].value // Get the username from the form
      const password = this.formValues['password'].value // Get the password from the form

      console.log('username is ' + phoneNumber + "password is " +password)
      // Login Api
      this.store.dispatch(login({ Number: phoneNumber, password: password }))
    }
  }
}
