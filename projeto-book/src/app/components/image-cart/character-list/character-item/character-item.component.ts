import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  character!: Character;

  constructor() {

   }

  ngOnInit(): void {



  }

}
