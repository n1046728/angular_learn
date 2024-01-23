import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUpdate=false;;
  @Input() message ='';
  prefix='';
  fontSize=20;

  changePrefix(){
    this.prefix ='Hello World!!!';
    this.isUpdate=true;
    this.fontSize++;

  }
}
