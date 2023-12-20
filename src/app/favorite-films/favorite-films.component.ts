import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-films',
  standalone: true,
  imports: [ CommonModule, FilmPosterComponent],
  templateUrl: './favorite-films.component.html',
  styleUrl: './favorite-films.component.css'
})
export class FavoriteFilmsComponent {
  favoriteFilms: any[] = [];
  Text: string = 'Favorites';
  keys: string[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        this.keys.push(key);
      }
    }
    console.log(this.keys);
    for(let i = 0; i < this.keys.length; i++){
      const keyNumber = Number(this.keys[i]);
      this.movieService.getMovieDetails(keyNumber).subscribe(response => {
        this.favoriteFilms.push(response);
      });
    }
    console.log(this.favoriteFilms);
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
