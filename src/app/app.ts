import { Component } from '@angular/core';
import { RegisterFormComponent } from './components/register-form/register-form';

@Component({
  imports: [RegisterFormComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
