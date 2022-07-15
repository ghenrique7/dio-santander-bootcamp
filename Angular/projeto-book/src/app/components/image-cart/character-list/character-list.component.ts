import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character } from './model/character.model';
import { CharacterService } from './character-list.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: any;
  booksService: CharacterService;

  constructor(  characterService : CharacterService) {

    this.booksService = characterService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.characters = this.booksService.getCharacter().subscribe(((data) => {
      this.characters = data;
      console.log(this.characters);
    }))

  }


}


