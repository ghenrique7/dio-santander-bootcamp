import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Character} from "./model/character.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: Character[] = [
  {name : "",
   house: "",
   dateOfBirth: 0,
   ancestry: 0,
   hogwartsStudent: "",
   image: ""
  }

];

@Injectable()


export class CharacterService {

  private url = 'http://hp-api.herokuapp.com/api/characters';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getCharacter() {
      return this.http.get(this.url)

  
    }

}
