import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { parse } from 'querystring';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  positivecasesfromsamplesreported: string;
  samplereportedtoday: string;
  source: string;
  testsconductedbyprivatelabs: string;
  totalindividualstested: string;
  totalpositivecases: string;
  totalsamplestested: string;
  updatetimestamp: string;
}

@Component({
  selector: 'app-date-tracker',
  templateUrl: './date-tracker.component.html',
  styleUrls: ['./date-tracker.component.css']
})
export class DateTrackerComponent implements OnInit {

  totalCase:any = {};
  allArrayData: any = [];
  allArrayObjStates: any = [];
  ELEMENT_DATA: PeriodicElement[] = [];
  todayData: any;
  allTempData;
  displayedColumns: string[] = [
    'updatetimestamp',
    'samplereportedtoday',
                                'positivecasesfromsamplesreported',
                                'totalpositivecases',
                                'totalindividualstested',
                              ];
  dataSource ;
  @ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;
   @ViewChild(MatSort , {static: false}) sort: MatSort;

   constructor(private httpClient: HttpClient){}
  
   ngOnInit(){
  
    this.httpClient.get("https://api.covid19india.org/data.json").subscribe(data =>{
      this.allTempData = data;
      for(const atemp in this.allTempData){
        this.allArrayData.push(this.allTempData[atemp])
      }
      this.allArrayObjStates = this.allArrayData[1]
      this.ELEMENT_DATA = this.allArrayData[2];
      this.ELEMENT_DATA.sort().reverse()
      // console.log(this.ELEMENT_DATA)
      
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    })
  }

}
