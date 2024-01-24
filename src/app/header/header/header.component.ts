import { ReturnStatement } from '@angular/compiler';
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
  today=new Date();

  fakeUsers:User[]=getFakeUserData();

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

interface User {
  id:number;
  name:string;
  email:string;
}

function getFakeUserData():User[]{
  const users:User[] = [];
  for (let i = 0; i < 10; i++) {
    const user :User = {
      id : i,
      name : `User ${i}`,
      email : `abc${i}@gmail.com.tw`
    };
    users.push(user);
  }
  return users;
}
