import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const URL_API = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient)

  getByCapital(query: string){
    const queryLowerCase = query.toLocaleLowerCase();
    return this.http.get(`${URL_API}/capital/${query}`)
  }
}
