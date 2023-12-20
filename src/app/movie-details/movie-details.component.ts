import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  movieDetails: any;
  movieTitle: string = '';
  movieReleaseDate: string = '';
  movieOverview: string = '';
  moviePoster: string = '';
  movieCast: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      this.movieService.getMovieDetails(this.movieId).subscribe(details => {
        this.movieDetails = details;
        this.movieTitle = this.movieDetails.title;
        this.movieOverview = this.movieDetails.overview;
        this.moviePoster = `https://image.tmdb.org/t/p/w500${this.movieDetails.poster_path}`;
        this.movieReleaseDate = this.movieDetails.release_date;
      });
      this.movieService.getMovieCredits(this.movieId).subscribe(credits => {
        this.movieCast = credits.cast.map((person: any) => ({
          name: person.name,
          profilePhoto: `https://image.tmdb.org/t/p/w500${person.profile_path}`
        }));
        console.log('Movie Cast:', this.movieCast);
      });
    });
  }


}
