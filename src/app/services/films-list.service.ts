import { Titles } from './../models/Titles';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsListService {
  constructor(private http: HttpClient) {}

  userEvents: Observable<any[]>;

  getFilms() {
    return this.http.get<any>(
      'https://api-movies.gateway.linkapi.solutions/v1/movies'
    );
  }

  getMovieDetails(movieTitle) {
    const source = this.getFilms();
    const example = source.pipe(map((movie) => (movie.title = movieTitle)));
    const subscriber = example.subscribe((result) => console.log(result.title));
  }
}
