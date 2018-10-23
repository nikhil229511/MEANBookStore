import { ActivatedRoute } from '@angular/router';
import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {
  
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

  id:any;
  constructor(private service:BackendService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id=this.route.snapshot.params.id;
      this.getBookInfo(this.route.snapshot.params.id);
    });
  }

  getBookInfo(id:any){
    this.service.getBook(id).subscribe(
      (result)=>{
        this.book=result;      
      }
    );
  }


  editBook():void{
    this.service.editBook(this.id,this.book).subscribe(
      (result)=>{
        console.log(result);
      }
    )
  }

  goBack():void{
    window.location.href="/books/detail/"+this.id;
  }
}
