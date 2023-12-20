import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-films',
  standalone: true,
  imports: [],
  templateUrl: './favorite-films.component.html',
  styleUrl: './favorite-films.component.css'
})
export class FavoriteFilmsComponent {
  favoriteFilms: any[] = [];
  genreId: number = 28;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesByGenre(this.genreId).subscribe(response => {
      const allMovies = response.results;
      this.favoriteFilms = allMovies;
    });
  }

}
