import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personagem } from './model/Personagem.model';
import { BooksService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  personagens: any;
  booksService: BooksService;

  constructor(  booksService: BooksService) {

    this.booksService = booksService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.personagens = this.booksService.getBooks().subscribe((data => {
      this.personagens = data;
      console.log(this.personagens);
    }))

  }


}


