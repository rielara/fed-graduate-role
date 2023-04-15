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
}
