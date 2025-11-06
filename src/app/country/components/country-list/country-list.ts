import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
  styles: ``,
})
export class CountryList {
  countries = input.required<Country[]>()
}
