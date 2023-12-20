import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-poster',
  standalone: true,
  imports: [],
  templateUrl: './film-poster.component.html',
  styleUrl: './film-poster.component.css'
})
export class FilmPosterComponent implements OnInit {
  @Input() film: any;
  @Output() posterClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  onPosterClick(): void {
    this.posterClicked.emit(this.film.id);
  }

  toggleFavorite(): void{
    this.film.favorite = !this.film.favorite;
  }

}
