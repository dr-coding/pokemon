import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'NameAbility'})
export class SearchFilterPipe implements PipeTransform{
    transform(pokemonList:any[],search:string):any[]{
        if(pokemonList.length>0){
           pokemonList =  pokemonList.filter((pokemon:any)=>{
               let exist;
                if(pokemon.name.match(search)){
                    exist = true;
                }
                pokemon.abilities.filter((ability:any)=>{
                    if(ability.ability.name.match(search)){
                        exist = true;
                    }
                })
                if(exist){
                    return pokemon;
                }
            })
        }
        return pokemonList;
    }
}