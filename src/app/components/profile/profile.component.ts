import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  inputName: string;
  inputAge: string;
  favoriteMovie: string;
  favoriteGenre = 'Horror';

  clearFields() {
    this.inputName = '';
    this.inputAge = '';
    this.favoriteMovie = '';
    this.favoriteGenre = 'Horror';
  }

  saveProfile(name, age, movie, genre) {
    this.inputName = name;
    this.inputAge = age;
    this.favoriteMovie = movie;
    this.favoriteGenre = genre;
  }

  ngOnInit(): void {}
}
