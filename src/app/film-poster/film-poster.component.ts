import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-poster',
  standalone: true,
  imports: [],
  templateUrl: './film-poster.component.html',
  styleUrl: './film-poster.component.css'
})
export class FilmPosterComponent implements OnInit {
  @Input() film: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite() {
    this.film.favorite = !this.film.favorite;
  
  }

}
