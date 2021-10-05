import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  fetchPokemonList(data=10){
      return this.http.get('https://pokeapi.co/api/v2/pokemon?limit='+data+'&offset=0').pipe(switchMap((pokemon:any)=>{
      const subPock$= pokemon.results.map((pockeData:any)=> this.http.get(pockeData.url));
      return forkJoin(subPock$).pipe(
        map((pokemonObj:any) => ({ pokemon, pokemonObj}))
      );
    }));
    
  }
  updatePokemonList(url){
    return this.http.get(url).pipe(switchMap((pokemon:any)=>{
      const subPock$= pokemon.results.map((pockeData:any)=> this.http.get(pockeData.url));
      return forkJoin(subPock$).pipe(
        map((pokemonObj:any) => ({ pokemon, pokemonObj}))
      );
    }));
  }
}
