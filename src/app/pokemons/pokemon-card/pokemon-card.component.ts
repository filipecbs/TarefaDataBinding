import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

    @Input() pokemonInfo;
    @Output() pokemonClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
      console.log(this.pokemonInfo);
  }

  goToProfile() {
      this.pokemonClicked.emit(this.pokemonInfo.id);
  }
}
