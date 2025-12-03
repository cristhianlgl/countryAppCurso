import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList, NgClass],
  templateUrl: './by-region-page.html',
  styles: ``,
})
export class ByRegionPage {

  countryServices = inject(CountryService)

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  currentRegion = signal<Region | null>(null);

  protected countryResource = rxResource({
    params: () => ({ query: this.currentRegion() }),
    stream: ({ params }) => {
      if(!params.query) return of([]);
      return this.countryServices.getByRegion(params.query);
    },
  })
}
