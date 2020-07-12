import { FilmsListService } from './../../services/films-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movies;
  movieTitle;

  constructor(
    private filmService: FilmsListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieTitle = this.route.snapshot.params.filmTitle;
    console.log(this.movieTitle);
    this.movies = this.filmService.getMovieDetails(this.movieTitle);
  }
}
