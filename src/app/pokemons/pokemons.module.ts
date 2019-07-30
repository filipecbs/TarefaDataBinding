import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PokemonsPage } from './pokemons.page';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PokemonsPage, PokemonCardComponent]
})
export class PokemonsPageModule {}
