import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-films',
  standalone: true,
  imports: [ CommonModule, FilmPosterComponent, FormsModule],
  templateUrl: './favorite-films.component.html',
  styleUrl: './favorite-films.component.css'
})
export class FavoriteFilmsComponent {
  favoriteFilms: any[] = [];
  originalFavoriteFilms: any[] = [];
  Text: string = 'Favorites';
  keys: string[] = [];
  searchText: string = '';

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        this.keys.push(key);
      }
    }
    for(let i = 0; i < this.keys.length; i++){
      const keyNumber = Number(this.keys[i]);
      this.movieService.getMovieDetails(keyNumber).subscribe(response => {
        this.favoriteFilms.push(response);
        this.originalFavoriteFilms.push(response);
      });
    }
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }

  searchClicked(): void {
    this.favoriteFilms = this.originalFavoriteFilms.filter(film => film.title.toLowerCase().includes(this.searchText.toLowerCase()));
    this.searchText = '';
  }
}
