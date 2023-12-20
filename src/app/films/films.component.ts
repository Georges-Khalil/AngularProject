import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';
import { GenresMenuComponent } from '../genres-menu/genres-menu.component';

@Component({
  selector: 'app-films',
  standalone: true,
  imports : [FilmPosterComponent, CommonModule, GenresMenuComponent],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: any[] = [];
  page: number = 1;
  genreId: number = 28;
  @Output() posterClicked = new EventEmitter<number>();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesByGenre(this.genreId).subscribe(response => {
      console.log(response.results);
      this.films = response.results;
    });
  }

  onGenreSelected(genreId: number): void {
    this.genreId = genreId;
    this.page = 1;
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
