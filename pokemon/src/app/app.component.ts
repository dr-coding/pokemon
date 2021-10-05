import { Component } from '@angular/core';
import {AppService } from './app.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'pokemon';
  pokemonList:any[];
  next:string;
  prev:string;
  recordCount:number =10;
  searchTxt:'';
  public filterObj:any = {searchTxt:'',sortBy:''};
  constructor(private service:AppService,private route:Router, private activeRoute: ActivatedRoute,private  location:Location){}

  ngOnInit(){
    this.activeRoute.queryParams.subscribe(params => {
      let obj = {
        searchTxt: params['searchTxt'],
        sortBy : params['sortBy']
      }
      this.filterObj = obj;
    }); 
    this.service.fetchPokemonList().subscribe(({pokemon, pokemonObj})=>{
      this.next = pokemon.next;
      this.prev = pokemon.prev;
      this.pokemonList = pokemon.results.map((singlePokemon,i)=>{
        return {
          name:singlePokemon.name,
          height:pokemonObj[i].height,
          weight:pokemonObj[i].weight,
          abilities:pokemonObj[i].abilities,
          image: pokemonObj[i].sprites.other['official-artwork'].front_default
        }
      });
    })
  }

  updateRecordsInPage(updateTo:number){
    this.recordCount = updateTo;
    this.service.fetchPokemonList(updateTo).subscribe(({pokemon, pokemonObj})=>{
      this.next = pokemon.next;
      this.prev = pokemon.prev;
      this.pokemonList = pokemon.results.map((singlePokemon,i)=>{
        return {
          name:singlePokemon.name,
          height:pokemonObj[i].height,
          weight:pokemonObj[i].weight,
          abilities:pokemonObj[i].abilities,
          image: pokemonObj[i].sprites.other['official-artwork'].front_default
        }
      });
    })
  }

  updateScreen(url:string){
    this.service.updatePokemonList(url).subscribe(({pokemon, pokemonObj})=>{
      this.next = pokemon.next;
      this.prev = pokemon.prev;
      this.pokemonList = pokemon.results.map((singlePokemon,i)=>{
        return {
          name:singlePokemon.name,
          height:pokemonObj[i].height,
          weight:pokemonObj[i].weight,
          abilities:pokemonObj[i].abilities,
          image: pokemonObj[i].sprites.other['official-artwork'].front_default
        }
      });
    })
  }

  filterList(filter){
    this.route.navigate([],{relativeTo: this.activeRoute, queryParams: 
      {
        sortBy:this.filterObj.sortBy,searchTxt:this.filterObj.searchTxt
      },
      replaceUrl: true,})
  }
}
