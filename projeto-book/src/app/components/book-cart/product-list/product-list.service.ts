import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/books.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: Book[] = [
  {name : "",
   house: "",
   dateOfBirth: 0,
   ancestry: 0,
   hogwartsStudent: "",
   image: ""
  }

];

@Injectable()


export class BooksService {

  private url = 'http://hp-api.herokuapp.com/api/characters';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getBooks() {
      return this.http.get(this.url)

  
    }

}
