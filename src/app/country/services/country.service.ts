import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryMapper } from '../mappers/country.mapper';
import { RestCountry } from '../interfaces/rest-countries.interface';
import { map, catchError, throwError, delay } from 'rxjs';

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
      catchError(error =>
        throwError(() => new Error(`No se puedo obtener paises con la ciudad ${query}`))
       )
    )
  }

  getByContry(query: string){
    const queryLowerCase = query.toLocaleLowerCase();
    console.log(`${URL_API}/name/${queryLowerCase}`)
    return this.http.get<RestCountry[]>(`${URL_API}/name/${queryLowerCase}`)
    .pipe(
      map((response) => CountryMapper.toCountries(response)),
      catchError((error) => {
        return throwError(
          () => new Error(`No se puedo obtener paises con el nombre ${query}`)
        )
      }
      )
    )
  }

  getByAlphaCode(code: string){
    const codeLowerCase = code.toLocaleLowerCase();
    console.log(`${URL_API}/name/${codeLowerCase}`)
    return this.http.get<RestCountry[]>(`${URL_API}/alpha/${codeLowerCase}`)
    .pipe(
      map((response) => CountryMapper.toCountries(response)),
      map((countries) => countries.at(0)), // Retorna el primer pais de la respuesta
      catchError(() =>
        throwError(
          () => new Error(`No se puedo obtener paises con ese codigo ${code}`)
        )
      )
    )
  }
}
