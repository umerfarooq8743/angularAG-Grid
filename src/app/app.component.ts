import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  rowData:any;
  gridApiActive:any;
columnDefs=[
  {headname:'Country', field:'Country', sortable:true,filter:true,width:250,},
  {headname:'Code', field:'Code', sortable:true, wrapText:true, autoHeight:true},
  {headname:'Map', field:'Map', sortable:true,cellRenderer:function(params:any){
    return '<a href="'+params.value+'" target="_blank">Map</a>'
  }}
]

 

onGridReady1(params:any){
  this.gridApiActive=params.api;
  this.rowData=[{Country:'india', Code:'+91',Map:'https://www.google.com/maps/place/India/@20.8303813,73.7291159,5z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA'},
  {Country:'pak', Code:'+92'},
  {Country:'aus', Code:'+90'},]
}
searchText:any;
onFilterBOxChange(){
  this.gridApiActive.setQuickFilter(this.searchText);
}
}