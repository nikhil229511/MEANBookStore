import { BackendService } from './../backend.service';
import { Book } from './../book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[];
  constructor(private service:BackendService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook():void{
    this.service.getAllBook().subscribe(
      (result)=>{
        this.books=result;
        console.log(result);
      }
    );
  }
}
