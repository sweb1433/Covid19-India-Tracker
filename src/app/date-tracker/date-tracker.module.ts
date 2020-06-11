import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { DateTrackerComponent } from './date-tracker.component';
    import { RouterModule } from '@angular/router';
    import { dateTrackerRoutes } from './date-tracker.routes';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatInputModule} from '@angular/material/input';
    import { MatTableModule } from '@angular/material/table';
    import { MatPaginatorModule } from '@angular/material';
    import {MatSortModule} from '@angular/material/sort';
    import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
    import { DateSlicer } from '../../../src/custom-pipes/date-slicer.pipe';

    @NgModule({
    declarations: [DateTrackerComponent,DateSlicer],
    exports: [DateTrackerComponent],
    imports: [
    RouterModule.forChild(dateTrackerRoutes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
    ]
    })
    export class DateTrackerModule { }