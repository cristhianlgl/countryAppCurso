import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryMapper } from '../mappers/country.mapper';
import { RestCountry } from '../interfaces/rest-countries.interface';
import { map } from 'rxjs';

const URL_API = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient)

  getByCapital(query: string){
    const queryLowerCase = query.toLocaleLowerCase();
    return this.http.get<RestCountry[]>(`${URL_API}/capital/${queryLowerCase}`)
    .pipe(
      map((response) => CountryMapper.toCountries(response)),
    )
  }
}
