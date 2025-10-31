import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayout } from './layout/country-layout/country-layout';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        component: ByCountryPage,
      },
      {
        path: 'by/:code',
        component: ByCountryPage,
      },
      {
        path: 'by-region',
        component: ByRegionPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
