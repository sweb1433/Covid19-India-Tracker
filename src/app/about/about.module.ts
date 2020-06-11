import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { AboutComponent } from './about.component';
    import { RouterModule } from '@angular/router';
    import { AboutRoutes } from './about.routes';
    @NgModule({
    declarations: [AboutComponent],
    exports: [AboutComponent],
    imports: [
    RouterModule.forChild(AboutRoutes),
    CommonModule
    ]
    })
    export class AboutModule { }
