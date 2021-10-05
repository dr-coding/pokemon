import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokomon-list',
  templateUrl: './pokomon-list.component.html',
  styleUrls: ['./pokomon-list.component.css']
})
export class PokomonListComponent implements OnInit {

  @Input() pokemonList:any[];
  searchTxt:string;
  sortBy:string;
  @Input() filterObj:any;
  @Output() triggerFilter = new EventEmitter();

  ngOnInit(): void {
  }

  sortPokemon(sortingWith){
    this.sortBy = sortingWith;
     this.pokemonList = JSON.parse(JSON.stringify(this.pokemonList.sort((a,b)=> {
       if(sortingWith ==='name'){
      return a.name.localeCompare(b.name)}
      else if(sortingWith === 'weight'){
        return a.weight -b.weight;
      }
      else{
        return a.height - b.height;
      }
    })));
    this.filterObj.sortBy = this.sortBy;
    this.triggerFilter.emit('filter changed');

    console.log(this.pokemonList);
  }
  filterWithSearch(){
    this.triggerFilter.emit('filter changed');
  }

}
