import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css'],
})

export class LangComponent implements OnInit {

  favoriteSeason!: string;
  seasons: string[] = ['JavaScript', 'Java', 'Python', 'Ruby'];

  constructor() { }

  ngOnInit(): void {
  }

}
