import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FAQComponent } from './faq.component';
    import { RouterModule } from '@angular/router';
    import { faqRoutes } from './faq.routes';
    @NgModule({
    declarations: [FAQComponent],
    exports: [FAQComponent],
    imports: [
    RouterModule.forChild(faqRoutes),
    CommonModule
    ]
    })
    export class FAQModule { }
