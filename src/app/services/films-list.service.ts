import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsListService {
  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get(
      'https://api-movies.gateway.linkapi.solutions/v1/movies'
    );
  }
}
