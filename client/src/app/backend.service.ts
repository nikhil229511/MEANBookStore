import { Book } from './book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAllBook(){
    return this.http.get<Book[]>(this.url+"/api/books").pipe(
      tap((books)=>this.log("Books Fetched")),
      catchError(this.handleError("Error fetching Books",[]))
    );
  }

  getBook(id:any){
    return this.http.get<Book>(this.url+"/api/books/"+id).pipe(
      tap((books)=>this.log("Book Fetched")),
      catchError(this.handleError("Error fetching Books"))
    );
  }

  addBook(book:Book){
    return this.http.post(this.url+"/api/books",book).pipe(
      tap((book)=>this.log("Book Added")),
      catchError(this.handleError("Error Adding Book"))
    );
  }

  deleteBook(id:any){
    return this.http.delete(this.url+"/api/books/"+id).pipe(
      tap((book)=> this.log("Book Deleted")),
      catchError(this.handleError("Error Deleting Book"))
    )
  }

  editBook(id:any,book:Book){
    return this.http.put(this.url+"/api/books/"+id,book).pipe(
      tap((book)=> this.log("Book Updated")),
      catchError(this.handleError("Error Updating Book"))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(msg:string){
    console.log(msg);
  }
}
