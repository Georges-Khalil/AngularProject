import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-poster',
  standalone: true,
  imports: [],
  templateUrl: './film-poster.component.html',
  styleUrl: './film-poster.component.css'
})
export class FilmPosterComponent implements OnInit {
  @Input() film: any;
  @Output() posterClicked = new EventEmitter<number>();
  isFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    this.isFavorite = !!favorites[this.film.id];
  }

  toggleFavorite(): void{
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.addToFavorites();
    } else {
      this.removeFromFavorites();
    }
  }

  addToFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    favorites[this.film.id] = this.film;
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFromFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    delete favorites[this.film.id];
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  onPosterClick(): void {
    this.posterClicked.emit(this.film.id);
  }

}
