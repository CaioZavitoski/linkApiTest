import { Component, OnInit } from '@angular/core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  faSearch = faSearch;
  faUserCircle = faUserCircle;

  ngOnInit(): void {}
}
