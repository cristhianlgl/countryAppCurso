import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryMenu } from "../../components/country-menu/country-menu";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, CountryMenu],
  templateUrl: './country-layout.html',
  styles: ``,
})
export class CountryLayout {

}
