import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseApiUrl :string = "https://api.themoviedb.org/3/";

  httpOptions = {
    header: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmJjZGIyZWUxM2NjY2NkMzVlNjUwOTAxNTY0ZjJjYSIsInN1YiI6IjY1NTA5YjVhZDQ2NTM3MDBhYjk2NDBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mV-OK2fGrRYdzTn916V2eABzTIIIx-EEhNwvGRRSapE'
      }
    )
  };
  constructor(private httpClient: HttpClient) { }


  getGenreList(): Observable<any[]>
  {
    let genresObs: Observable<any[]> ;
    let genreListEndPoint = "genre/movie/list?language=en";

    genresObs = this.httpClient.get<any[]>(this.baseApiUrl + genreListEndPoint, this.httpOptions);

    return genresObs;
  }
}
