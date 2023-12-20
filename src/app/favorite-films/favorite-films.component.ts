import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from '../films/films.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-films',
  standalone: true,
  imports: [FilmsComponent, CommonModule],
  templateUrl: './favorite-films.component.html',
  styleUrl: './favorite-films.component.css'
})
export class FavoriteFilmsComponent {
  favoriteFilms: any[] = [];
  Text: string = 'Favorites';
  keys: string[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length-1; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        this.keys.push(key);
      }
    }
    console.log(this.keys);
  }
}
