import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUpdate=false;;
  @Input() message ='';
  @Output() update = new EventEmitter<string>();
  prefix='';
  fontSize=20;

  changePrefix(){
    this.prefix ='Hello World!!!';
    this.isUpdate=true;
    this.fontSize++;

  }

  emitDataToParent(){
    this.prefix='it come from child component';
    this.update.emit(this.prefix);
  }

  updatePrefixFromExternal(data:string){
    this.prefix = data;
  }
}
