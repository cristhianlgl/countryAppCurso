import { Component, inject, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.html',
  styles: ``,
})
export class ByCapitalPage {
  countryServices =inject(CountryService)
  handleSearch(query: string){
    this.countryServices.getByCapital(query).subscribe( {
      next: (data) => {
        console.log(data);
      }
    })
  }
}
