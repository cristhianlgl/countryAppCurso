import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-country-page.html',
  styles: ``,
})
export class ByCountryPage {
  countryServices =inject(CountryService)
  query = signal('');
  countryResource = resource({
    params: () => ({ query: this.query()}),
    loader: async ({params}) => {
      if(!params.query) return[];
      return await firstValueFrom(
        this.countryServices.getByContry(params.query)
      );
    }
  })
}
