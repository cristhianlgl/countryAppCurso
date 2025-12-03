import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryMapper } from '../mappers/country.mapper';
import { RestCountry } from '../interfaces/rest-countries.interface';
import { map, catchError, throwError, delay, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';

const URL_API = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient)
  private capitalSearchMap = new Map<string, Country[]>();
  private countrySearchMap = new Map<string, Country[]>();
  private regionSearchMap = new Map<string, Country[]>();

  getByCapital(query: string){
    const queryLowerCase = query.toLocaleLowerCase();
    console.log('by Capital',this.capitalSearchMap)
    if(this.capitalSearchMap.has(queryLowerCase))
      return of(this.capitalSearchMap.get(queryLowerCase));

    console.log('buscar:', queryLowerCase)
    return this.http.get<RestCountry[]>(`${URL_API}/capital/${queryLowerCase}`)
    .pipe(
      map((response) => CountryMapper.toCountries(response)),
      tap((countries) => this.capitalSearchMap.set(queryLowerCase, countries)),
      catchError(error =>
        throwError(() => new Error(`No se puedo obtener paises con la ciudad ${query}`))
       )
    )
  }

  getByRegion(region: Region){
    if(this.regionSearchMap.has(region))
      return of(this.regionSearchMap.get(region));

    console.log('buscar:', region)
    return this.http.get<RestCountry[]>(`${URL_API}/region/${region}`)
    .pipe(
      map((response) => CountryMapper.toCountries(response)),
      tap((countries) => this.regionSearchMap.set(region, countries)),
      catchError((error) => {
        console.error(error)
        return throwError(
          () => new Error(`No se puedo obtener paises por la region ${region}`)
        )
      })
    )
  }

  getByContry(query: string){
    const queryLowerCase = query.toLocaleLowerCase();
    console.log('by country',this.countrySearchMap)
    if(this.countrySearchMap.has(queryLowerCase))
      return of(this.countrySearchMap.get(queryLowerCase));

    console.log('buscar:', queryLowerCase)
    return this.http.get<RestCountry[]>(`${URL_API}/name/${queryLowerCase}`)
    .pipe(
      map((response) => CountryMapper.toCountries(response)),
      tap((countries) => this.countrySearchMap.set(queryLowerCase, countries)),
      catchError((error) => {
        return throwError(
          () => new Error(`No se puedo obtener paises con el nombre ${query}`)
        )
      })
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
