import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemon(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getSearchPokemon(searchTerm: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);

  }

  getPokemonTypeNormal() {
    return this.http.get(`https://pokeapi.co/api/v2/type/1`);
  }

  getPokemonTypeFighting() {
    return this.http.get(`https://pokeapi.co/api/v2/type/2`);
  }

  getPokemonTypeFlying() {
    return this.http.get(`https://pokeapi.co/api/v2/type/3`);
  }

  getPokemonTypePoison() {
    return this.http.get(`https://pokeapi.co/api/v2/type/4`);
  }

  getPokemonTypeGround() {
    return this.http.get(`https://pokeapi.co/api/v2/type/5`);
  }

  getPokemonTypeRock() {
    return this.http.get(`https://pokeapi.co/api/v2/type/6`);
  }

  getPokemonTypeBug() {
    return this.http.get(`https://pokeapi.co/api/v2/type/7`);
  }

  getPokemonTypeGhost() {
    return this.http.get(`https://pokeapi.co/api/v2/type/8`);
  }


}