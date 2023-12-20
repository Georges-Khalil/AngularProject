import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { FilmPosterComponent } from '../film-poster/film-poster.component';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-films-special',
  standalone: true,
  imports: [FilmPosterComponent, CommonModule],
  templateUrl: './films-special.component.html',
  styleUrl: './films-special.component.css'
})
export class FilmsSpecialComponent implements OnInit{
  option: string = '';
  films: any[] = [];
  optionText: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.option = params['option'];
      if(this.option == 'now-playing'){
        this.option = 'now_playing';
        this.optionText = 'Now Playing';
      }
      else if(this.option == 'top-rated'){
        this.option = 'top_rated';
        this.optionText = 'Top Rated';
      }
      else if(this.option == 'upcoming'){
        this.optionText = 'Upcoming';
      }
      else{
        this.optionText = 'Popular';
      }
      this.movieService.getSpecialMovies(this.option).subscribe(response => {
        this.films = response.results;
      });
    });
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
