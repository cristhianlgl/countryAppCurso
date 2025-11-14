import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, Observable, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.html',
  styles: ``,
})
export class ByCapitalPage {
  countryServices =inject(CountryService)
  query = signal('');

  protected countryResource = rxResource({
    // The params function defines reactive inputs
    params: () => ({ query: this.query() }),
    // The stream function returns an Observable based on the params
    stream: ({ params }) => {
      if(!params.query) return of([]);
      return this.countryServices.getByCapital(params.query);
    },
  });

  // countryResource = resource({
  //   params: () => ({ query: this.query()}),
  //   loader: async ({params}) => {
  //     if(!params.query) return[];
  //     return await firstValueFrom(
  //       this.countryServices.getByCapital(params.query)
  //     );
  //   }
  // })

  // isLoading = signal(false)
  // hasError = signal<string | null>(null)
  // countries = signal<Country[]>([])

  // handleSearch(query: string){
  //   if(this.isLoading()) return
  //   this.isLoading.set(true)
  //   this.hasError.set(null)
  //   this.countryServices.getByCapital(query).subscribe( {
  //     next: (data) => {
  //       this.countries.set(data)
  //     },
  //     error: (error) => {
  //       this.countries.set([])
  //       this.hasError.set(error.message)
  //     },
  //     complete: () => {
  //       this.isLoading.set(false)
  //     }
  //   })
  // }
}
