import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { GenresMenuComponent } from './genres-menu/genres-menu.component';
import { FilmsComponent } from './films/films.component';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GenresMenuComponent, FilmsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ang';
  searchQuery: string = '';
  @ViewChild(FilmsComponent) filmsComponent!: FilmsComponent;

  constructor(private movieService: MovieService, private router: Router) {
    this.filmsComponent = new FilmsComponent(movieService);
  }

  onGenreSelected(genreId: number): void {
    this.filmsComponent.genreId = genreId;
    this.filmsComponent.page = 1;
    this.filmsComponent.onGenreSelected(genreId);
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }

  onOptionClicked(option: string): void {
    this.router.navigate(['/films-special', option]);
  }

  onFavoriteClicked(): void {
    this.router.navigate(['/favorites']);
  }

  viewFavorites(): void {
    this.router.navigate(['/favorites']);
  }

  currentUrl(): string {
    return this.router.url;
  }
}
