import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { DisctrictWiseComponent } from './disctrict-wise.component';
    import { RouterModule } from '@angular/router';
    import { districtWiseRoutes } from './district-wise.routes';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatInputModule} from '@angular/material/input';
    import { MatTableModule } from '@angular/material/table';
    import { MatPaginatorModule } from '@angular/material';
    import {MatSortModule} from '@angular/material/sort';
    import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
    
    @NgModule({
    declarations: [DisctrictWiseComponent],
    exports: [DisctrictWiseComponent],
    imports: [
    RouterModule.forChild(districtWiseRoutes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ]
    })
    export class DistrictWiseModule { }
