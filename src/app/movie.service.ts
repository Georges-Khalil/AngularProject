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

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/genre/movie/list?language=en`, this.options);
  }

  getMoviesByGenre(genreId: number, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`, this.options);
  }
  
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?language=en-US`, this.options);
  }

  getMovieCredits(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/credits?language=en-US`, this.options);
  }

  getSpecialMovies(option: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${option}?language=en-US&page=1`, this.options);
  }
}