import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iPokemon } from '../interfaces/pokemonInterface';
const API_GET_ALL_POKEMON = environment.API_GET_ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getAllPokemon(){
    return this.http.get<iPokemon>(API_GET_ALL_POKEMON);
  }


}