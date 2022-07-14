import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from '../model/Personagem.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  personagem!: Personagem;

  constructor() {

   }

  ngOnInit(): void {



  }

}
