import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { DisctrictWiseComponent } from './disctrict-wise/disctrict-wise.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { HelpfulComponent } from './helpful/helpful.component';
import { FAQComponent } from './faq/faq.component';
import { DateTrackerComponent } from './date-tracker/date-tracker.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes = [
   {path: '', component : HomePageComponent}, 
  {path: 'district/:state', component : DisctrictWiseComponent},
  {path: 'about', component : AboutComponent},
  {path: 'links', component : HelpfulComponent},
  {path: 'FAQ', component : FAQComponent},
  {path: 'dateTracker', component : DateTrackerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DisctrictWiseComponent,
    HomePageComponent,
    AboutComponent,
    HelpfulComponent,
    FAQComponent,
    DateTrackerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule
    // FontAwesomeModule
    
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
