import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { TwdatePipe } from './twdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwdatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule //use ngModel must import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
