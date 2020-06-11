
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
    {
        path: '', 
        loadChildren: './home-page/home-page.module#HomePageModule'
    }, 
    {
        path: 'district/:state', 
        loadChildren: './disctrict-wise/disctrict-wise.module#DistrictWiseModule'
    },
    {
        path: 'about', 
        loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'links', 
        loadChildren: './helpful/helpful.module#HelpfulModule'
    },
    {
        path: 'FAQ', 
        loadChildren: './faq/faq.module#FAQModule'
    },
    {
        path: 'dateTracker', 
        loadChildren: './date-tracker/date-tracker.module#DateTrackerModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
