import { Country } from "../interfaces/country.interface";
import { RestCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
  static toCountry(country: RestCountry): Country {
    return {
      codigo: country.cca2,
      name: country.translations.spa.common ?? country.name.common,
      capital: country.capital?.length ? country.capital.join(', ') : 'N/A',
      population: country.population,
      flag: country.flag,
      flagSvg: country.flags.svg,
      region: country.region,
      subRegion: country.subregion,
      language: Object.values(country?.languages ?? {}).join(', ')
    };
  }

  static toCountries(countries: RestCountry[]): Country[] {
    return countries.map(CountryMapper.toCountry);
  }
}
