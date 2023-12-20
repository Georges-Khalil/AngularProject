import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GenresMenuComponent } from './genres-menu/genres-menu.component';
import { FilmsComponent } from './films/films.component';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GenresMenuComponent, FilmsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ang';
  @ViewChild(FilmsComponent) filmsComponent!: FilmsComponent;

  constructor(private movieService: MovieService) {
    this.filmsComponent = new FilmsComponent(movieService);
  }

  onGenreSelected(genreId: number): void {
    this.filmsComponent.genreId = genreId;
    this.filmsComponent.page = 1;
    this.filmsComponent.onGenreSelected(genreId);
  }
}
