import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;
  categories: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPokemons();
    

  }

  getPokemons() {
    this.dataService.getPokemons(50, this.page + 50)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach(result => {
        this.dataService.getPokemon(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemons.push(uniqueResponse);
            console.log(this.pokemons);
          });
      });
    });
  }

  searchPokemon(name: string) {
    this.dataService.getPokemon(name)
      .subscribe((response: any) => {
        this.pokemons = [];
        this.pokemons.push(response);
      });
  }

  searchBySearchTerm(searchTerm: string) {
    if (searchTerm !== '') {
      this.dataService.getSearchPokemon(searchTerm)
        .subscribe((response: any) => {
          this.pokemons = [];
          this.pokemons.push(response);
        });
    } 
  }

  getPokemonTypeNormal() {
    this.dataService.getPokemonTypeNormal()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
      

     
  }

  getPokemonTypeFighting() {
    this.dataService.getPokemonTypeFighting()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

  getPokemonTypeFlying() {
    this.dataService.getPokemonTypeFlying()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

  getPokemonTypePoison() {
    this.dataService.getPokemonTypePoison()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

  getPokemonTypeGround() {
    this.dataService.getPokemonTypeGround()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

  getPokemonTypeRock() {
    this.dataService.getPokemonTypeRock()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

  getPokemonTypeBug() {
    this.dataService.getPokemonTypeBug()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

  getPokemonTypeGhost() {
    this.dataService.getPokemonTypeGhost()
      .subscribe((response: any) => {
        this.pokemons = [];
        response.pokemon.forEach(pokemon => {
          this.dataService.getPokemon(pokemon.pokemon.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }
  

}
