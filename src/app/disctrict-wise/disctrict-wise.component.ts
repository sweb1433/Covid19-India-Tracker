import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { parse } from 'querystring';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  city: string;
  confirmed: string;
  lastupdatedtime: string;
  delta:Object
}

@Component({
  selector: 'app-disctrict-wise',
  templateUrl: './disctrict-wise.component.html',
  styleUrls: ['./disctrict-wise.component.css']
})
export class DisctrictWiseComponent implements OnInit {
  state:string;
  allProcessedData:any = [];
  ELEMENT_DATA: PeriodicElement[] = [];
  allCity:any = [];
  displayedColumns: string[] = [
    'city',
    'cases'
  ];
dataSource ;
@ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;
@ViewChild(MatSort , {static: false}) sort: MatSort;



  constructor(private route:ActivatedRoute,private httpClient: HttpClient){}


  ngOnInit() {
    this.state = this.route.snapshot.params.state
    // console.log(this.state,typeof(this.state))
    this.httpClient.get("https://api.covid19india.org/state_district_wise.json").subscribe(data =>{
      var allTempData = data;
      // console.log(allTempData[this.state])
      allTempData = allTempData[this.state]
      // console.log(allTempData)
      for(const atemp in allTempData){
        this.allProcessedData.push(allTempData[atemp])
      }
      //  console.log(this.allProcessedData[0])
       var x = this.allProcessedData[0]
       for(const atemp in x){
        // console.log(typeof(atemp),atemp)
        Object.assign(x[atemp],{city:atemp})
        this.ELEMENT_DATA.push(x[atemp])
      }

      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.ELEMENT_DATA)
    
    })
  }

}
