import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
  imports : [FilmPosterComponent, CommonModule],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: any[] = [];
  page: number = 1;
  genreId: number = 28;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesByGenre(this.genreId).subscribe(response => {
      console.log(response.results);
      this.films = response.results;
    });
  }

  nextPage(): void {
    this.page++;
    this.movieService.getMoviesByGenre(this.genreId, this.page).subscribe(films => {
      this.films = films.results;
    });
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.movieService.getMoviesByGenre(this.genreId, this.page).subscribe(films => {
        this.films = films.results;
      });
    }
  }
}
