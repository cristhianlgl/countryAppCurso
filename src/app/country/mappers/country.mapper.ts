import { Country } from "../interfaces/country.interface";
import { RestCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
  static toCountry(country: RestCountry): Country {
    return {
      codigo: country.cca2,
      name: country.name.common,
      capital: country.capital[0] ?? 'No capital',
      region: country.region,
      population: country.population,
      flag: country.flag,
      flagSvg: country.flags.svg,

    };
  }

  static toCountries(countries: any[]): Country[] {
    return countries.map(CountryMapper.toCountry);
  }
}
