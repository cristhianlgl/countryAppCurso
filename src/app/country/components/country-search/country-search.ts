import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.html',
  styles: ``,
})
export class CountrySearch {
  textPlaceholder = input<string>();
  searchChange = output<string>();
  //si no hay validaciones se puede emitir directamente el evento,
  //en caso contrario se puede crear un metodo manejador para hacer validaciones
  //antes de emitir el evento
  handleSearch(valor: string){
    this.searchChange.emit(valor)
  }
}
