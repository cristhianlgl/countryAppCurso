import { Component, effect, input, output, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.html',
  styles: ``,
})
export class CountrySearch {
  textPlaceholder = input<string>();
  debounceTime = input(700);
  searchValue = output<string>();
  searchValueChange = signal<string>('');

  //si no hay validaciones se puede emitir directamente el evento,
  //en caso contrario se puede crear un metodo manejador para hacer validaciones
  //antes de emitir el evento
  handleSearch(valor: string) {
    this.searchValue.emit(valor);
  }

  debounceEffect = effect((onCleanup) => {
    const value = this.searchValueChange();

    const timeout = setTimeout(() => {
      this.handleSearch(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
