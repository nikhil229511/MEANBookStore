import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';
import { RoutingModule } from './routing/routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BookaddComponent } from './bookadd/bookadd.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { BooksComponent } from './books/books.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookdetailComponent,
    BookaddComponent,
    BookeditComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
    BackendService,
    
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
