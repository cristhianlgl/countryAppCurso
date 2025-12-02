import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styles: ``,
})
export class NotFoundComponent {
  error = input<string>('No se pudo encontrar el pais');
  location = inject(Location);

  back() {
    this.location.back();
  }
}
