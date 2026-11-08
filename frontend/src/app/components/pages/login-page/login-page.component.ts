import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,TitleComponent,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  message = '';
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get fc() {
    return this.loginForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    // Authentication is not wired to the UI in this catalog demo.
    this.message = 'Connexion indisponible dans cette démonstration.';
  }
}
