import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  x=0;
  y=0;


  catchMouseMove(event :MouseEvent){
    this.x = event.clientX;
    this.y = event.clientY;
  }
}
