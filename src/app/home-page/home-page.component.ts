import { Component, ViewChild ,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { parse } from 'querystring';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSort, MatPaginator, MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  active: string;
  confirmed: string;
  deaths: string;
  deltaconfirmed: string;
  deltadeaths: string;
  deltarecovered: string;
  lastupdatedtime: string;
  recovered: string;
  state: string;
  statecode: string;
  statenotes:string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  totalCase:any = {};
  allArrayData: any = [];
  allArrayObjStates: any = [];
  ELEMENT_DATA: PeriodicElement[] = [];
  todayData: any;
  allTempData
  displayedColumns: string[] = [
                                'state',
                                'confirmed',
                                'active',
                                'deaths', 
                                'recovered',
                                // 'lastupdatedtime',
                                // 'deltaconfirmed',
                                // 'deltadeaths',
                                // 'deltarecovered',                                                              
                                // 'statecode',
                                // 'statenotes'
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
      this.ELEMENT_DATA = this.allArrayData[1];
      this.totalCase = this.ELEMENT_DATA[0];
      this.todayData = this.allArrayData[2].pop()
      // console.log(this.todayData)
      this.ELEMENT_DATA.shift();
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    })
  }


}
