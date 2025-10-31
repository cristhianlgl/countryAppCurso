import { Component, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.html',
  styles: ``,
})
export class ByCapitalPage {
  buscarPor = signal<string>("hh")
}
