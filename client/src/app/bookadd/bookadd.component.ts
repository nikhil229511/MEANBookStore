import { BackendService } from './../backend.service';
import { Book } from './../book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  book:any={    
    title:"",		
	  genre:"",
	  description:"",
	  author:"",
	  publisher:"",
	  pages:"",
    image_url:"",
    buy_url:""
  };
  
  constructor(private service:BackendService) { }

  ngOnInit() {
    
  }

  addBook(){
    this.service.addBook(this.book).subscribe(
      response=>{
        console.log(response);
      }
    );

    
  }
}
