import { Component, inject, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.html',
  styles: ``,
})
export class ByCapitalPage {
  countryServices =inject(CountryService)

  isLoading = signal(false)
  hasError = signal<string | null>(null)
  countries = signal<Country[]>([])

  handleSearch(query: string){
    if(this.isLoading()) return
    this.isLoading.set(true)
    this.hasError.set(null)
    this.countryServices.getByCapital(query).subscribe( {
      next: (data) => {
        this.countries.set(data)
      },
      error: (error) => {
        this.countries.set([])
        this.hasError.set(error.message)
      },
      complete: () => {
        this.isLoading.set(false)
      }
    })
  }
}
