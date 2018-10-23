import { Book } from './../book';
import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book:any;
  constructor(private service:BackendService,private route:ActivatedRoute) { }
  id:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id=this.route.snapshot.params.id;
      this.getBook(this.route.snapshot.params.id);

    });
  }

  getBook(id:any):void{
    this.service.getBook(id).subscribe(
      (result)=>{
        this.book=result;      
      }
    );
  }

  deleteBook():void{
    this.service.deleteBook(this.id).subscribe(
      (result)=>{
        console.log(result);
      }
    );
  }

  editBook():void{
    window.location.href="/books/edit/"+this.id;
  }
}
