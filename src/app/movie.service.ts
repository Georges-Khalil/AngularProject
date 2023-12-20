import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmJjZGIyZWUxM2NjY2NkMzVlNjUwOTAxNTY0ZjJjYSIsInN1YiI6IjY1NTA5YjVhZDQ2NTM3MDBhYjk2NDBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mV-OK2fGrRYdzTn916V2eABzTIIIx-EEhNwvGRRSapE'
    }
  };
  favorites: { [id: number]: boolean } = {};  // Dictionary of film IDs to favorite status

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/genre/movie/list?language=en`, this.options);
  }

  getMoviesByGenre(genreId: number, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`, this.options);
  }

<<<<<<< HEAD
  addToFavorites(movieId: number): void {
    this.favorites[movieId] = true;
    this.saveFavoritesToLocalStorage();
  }

  removeFromFavorites(movieId: number): void {
    delete this.favorites[movieId];
    this.saveFavoritesToLocalStorage();
  }

  getFavorites(): { [id: number]: boolean } {
    return this.favorites;
  }

  isFavorite(movieId: number): boolean {
    return this.favorites[movieId] === true;
  }

  private saveFavoritesToLocalStorage(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  private loadFavoritesFromLocalStorage(): void {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = JSON.parse(favorites);
    }
  }
  
=======
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?language=en-US`, this.options);
  }

  getMovieCredits(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/credits?language=en-US`, this.options);
  }
>>>>>>> 09c79c4650f0896a19e75dcdbde9ccc784e24948
}