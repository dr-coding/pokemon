import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  @Input() next:string;
  @Input() prev:string;
  @Input() recordCount:number;
  @Output() updateRecordsInPage = new EventEmitter();
  @Output() updateScreen = new EventEmitter();
  // @Input() filterObj:any[];

  ngOnInit(): void {

  }

  updateRecordsPage(updateTo:number){
    this.updateRecordsInPage.emit(updateTo);
  }
  screenUpdate(url:string){
    this.updateScreen.emit(url);

  }

}
