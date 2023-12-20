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
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');  // {} is default value, if no favorites in local storage
    this.isFavorite = !!favorites[this.film.id];  // !! converts to boolean
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;   // Toggle favorite status
    if (this.isFavorite) {                // Add or remove from favorites
      this.addToFavorites();
    } else {
      this.removeFromFavorites();
    }
  }

  addToFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');    // {} is default value, if no favorites in local storage
    favorites[this.film.id] = this.film;                                        // Add to favorites                
    localStorage.setItem('favorites', JSON.stringify(favorites));               // Save to local storage
  }

  removeFromFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');    // {} is default value, if no favorites in local storage
    delete favorites[this.film.id];                                             // Remove from favorites
    localStorage.setItem('favorites', JSON.stringify(favorites));               // Save to local storage         
  }

  onPosterClick(): void {
    this.posterClicked.emit(this.film.id);
  }

}
