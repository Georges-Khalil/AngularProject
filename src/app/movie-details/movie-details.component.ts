import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
    });
  }
}
