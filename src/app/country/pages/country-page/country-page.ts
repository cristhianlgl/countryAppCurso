import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.html',
  styles: ``,
})
export class CountryPage {
  private countryServices = inject(CountryService);
  private codeCountry = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = rxResource({
    params: () => ({ code: this.codeCountry}),
    stream: ({params}) => {
      if(!params.code) return of(undefined);
      return this.countryServices.getByAlphaCode(params.code)
    }
  });

}
