import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  inputName = '';
  inputAge = '';
  favoriteMovie = '';
  favoriteGenre = 'Horror';

  clearFields() {
    this.inputName = '';
    this.inputAge = '';
    this.favoriteMovie = '';
    this.favoriteGenre = 'Horror';
  }

  ngOnInit(): void {}
}
