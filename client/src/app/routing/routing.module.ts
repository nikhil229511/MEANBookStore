import { BookeditComponent } from './../bookedit/bookedit.component';
import { BookaddComponent } from './../bookadd/bookadd.component';
import { BookdetailComponent } from './../bookdetail/bookdetail.component';
import { BooksComponent } from './../books/books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes,Router } from '@angular/router';

const route:Routes=[
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'books/detail/:id',
    component:BookdetailComponent
  },
  {
    path:'books/add',
    component: BookaddComponent
  },
  {
    path:'books/edit/:id',
    component: BookeditComponent
  },
  {
    path:'',
    redirectTo: '/books',
    pathMatch:'full'
  }
]

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(route)
  ],
  declarations: []
})
export class RoutingModule { }
