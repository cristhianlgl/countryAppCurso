import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterApp } from "./shared/pages/footer-app/footer-app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CountryApp');
}
