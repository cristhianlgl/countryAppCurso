import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-details',
  imports: [DecimalPipe],
  templateUrl: './country-details.html',
  styles: ``,
})
export class CountryDetailsComponent {
  country = input.required<Country>();
}
