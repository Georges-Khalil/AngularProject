import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';
import { GenresMenuComponent } from '../genres-menu/genres-menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-films',
  standalone: true,
  imports : [FilmPosterComponent, CommonModule, GenresMenuComponent, FormsModule],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: any[] = [];
  page: number = 1;
  genreId: number = 28;
  searchText: string = '';
  @Output() posterClicked = new EventEmitter<number>();
  @Output() optionClicked = new EventEmitter<string>();
  @Output() favoriteClicked = new EventEmitter<void>();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesByGenre(this.genreId).subscribe(response => {
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

  optionSelected(option: string): void {
    this.optionClicked.emit(option);
  }

  viewFavorites(): void {
    this.favoriteClicked.emit();
  }

  
  searchClicked(): void {
    this.movieService.getMoviesByGenre(this.genreId).subscribe(response => {
      this.films = response.results;
      this.films = this.films.filter(film => film.title.toLowerCase().includes(this.searchText.toLowerCase()));
      this.searchText = '';
    });
  }

}
