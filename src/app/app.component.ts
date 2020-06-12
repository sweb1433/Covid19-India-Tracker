import { Component, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TRANSFORMAX COVID19 INFO';
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Covid19 India updates,Covid19 realtime data' });
    this.meta.addTag({ name: 'description', content: 'Covid19 India updates,Covid19 realtime data' },true);
    this.meta.addTag({ name: 'author', content: 'Sushant Verma' });
    this.meta.addTag({ name: 'author', content: 'Sushant Verma' });
  }
  
  
}
