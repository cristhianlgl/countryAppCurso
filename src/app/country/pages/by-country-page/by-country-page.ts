import { Component } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-country-page.html',
  styles: ``,
})
export class ByCountryPage {

}
