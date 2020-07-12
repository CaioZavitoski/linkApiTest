import { FilmsListService } from './../../services/films-list.service';
import { Component, OnInit } from '@angular/core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  
  constructor(private filmService: FilmsListService) {}

  movies;

  faSearch = faSearch;
  faUserCircle = faUserCircle;

  ngOnInit(): void {
    this.movies = this.filmService.getFilms();
  }
}
