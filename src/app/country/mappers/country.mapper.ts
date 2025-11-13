import { Country } from "../interfaces/country.interface";
import { RestCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
  static toCountry(country: RestCountry): Country {
    return {
      codigo: country.cca2,
      name: country.translations.spa.common ?? country.name.common,
      capital: country.capital.join(', '),
      region: country.region,
      population: country.population,
      flag: country.flag,
      flagSvg: country.flags.svg,

    };
  }

  static toCountries(countries: RestCountry[]): Country[] {
    return countries.map(CountryMapper.toCountry);
  }
}
