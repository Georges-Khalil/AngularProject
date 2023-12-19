import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genres-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genres-menu.component.html',
  styleUrls: ['./genres-menu.component.css']
})
export class GenresMenuComponent implements OnInit {
  genres: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe(response => {
      this.genres = response.genres;
    });
  }

  selectGenre(genreId: number): void {
    this.movieService.getMoviesByGenre(genreId).subscribe();
  }
}
