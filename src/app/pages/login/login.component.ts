import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginFormulary: FormGroup;

  public wrongCredentials = signal(false);

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
   private routes = inject(Router);

  constructor() {
    this.loginFormulary = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      password: [
        '',
        [
          Validators.required,
        ]
      ],
    });
  }

  login() {
    this.loginFormulary.markAllAsTouched();

    if(this.loginFormulary.invalid) return;

    const { value } = this.loginFormulary;

    const login = this.authService.login(value['email'], value['password']);

    if(login) this.routes.navigate(['destacats']);
    else this.wrongCredentials.set(true);
  }

  invalid(fieldName: string): boolean {
    const control = this.loginFormulary.get(fieldName);
    if(!control) return false;

    return control.touched && control.invalid;
  }

  errorMessage(fieldName: string): string {
    const control = this.loginFormulary.get(fieldName);
    if(!control) return '';

    if (control.hasError('required')) {
      return 'Camp obligatori';
    }

    if (control.hasError('email')) {
      return 'Correu invàlid';
    }

    return '';
  }
}
