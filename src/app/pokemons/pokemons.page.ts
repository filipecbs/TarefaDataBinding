import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.page.html',
    styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {

    time:number = 5;
    pokemons = [];

    constructor(private pokemonService: PokemonService, private router: Router) { }

    ngOnInit() {
    }

    catchPokemon() {
        this.waitCounter();
        this.pokemonService.getPokemon(this.getRandomPokemonID()).subscribe(
            (res) => {
                console.log(res);
                this.pokemons.push(res);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    getRandomPokemonID() {
        return Math.floor(Math.random() * 807) + 1;
    }

    waitCounter() {
        const interval = setInterval(() => {

            this.time--;

            if (this.time === 0) {
                this.time = 5;
                clearInterval(interval);
            }
        }, 1000);
    }

    goToPokemonProfile(id) {
        console.log('Ir para o perfil do pokémon de id', id);
        this.router.navigate(['profile', id]);
    }
}
