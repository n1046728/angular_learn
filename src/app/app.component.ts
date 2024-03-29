import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //add lifecycle event sequence
  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Lifecycle event sequence - OnInit';
    }, 5000);
  }
  title = 'demo';
  textArea='';
  x=0;
  y=0;


  catchMouseMove(event :MouseEvent){
    this.x = event.clientX;
    this.y = event.clientY;
  }

  getDataFromInput(data:string){
    console.log(data);
    alert(data);
  }
  clearContent(){
    this.textArea ='';
  }

}
