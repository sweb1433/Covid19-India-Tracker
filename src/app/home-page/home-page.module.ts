import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { HomePageComponent } from './home-page.component';
    import { RouterModule } from '@angular/router';
    import { homePageRoutes } from './homePage.routes';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatInputModule} from '@angular/material/input';
    import { MatTableModule } from '@angular/material/table';
    import { MatPaginatorModule } from '@angular/material';
    import {MatSortModule} from '@angular/material/sort';
    import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

    @NgModule({
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    imports: [
    RouterModule.forChild(homePageRoutes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ]
    })
    export class HomePageModule { }
