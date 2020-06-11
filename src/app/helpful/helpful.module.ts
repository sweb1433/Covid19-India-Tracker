import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { HelpfulComponent } from './helpful.component';
    import { RouterModule } from '@angular/router';
    import { helpfulRoutes } from './helpful.routes';
    @NgModule({
    declarations: [HelpfulComponent],
    exports: [HelpfulComponent],
    imports: [
    RouterModule.forChild(helpfulRoutes),
    CommonModule
    ]
    })
    export class HelpfulModule { }
