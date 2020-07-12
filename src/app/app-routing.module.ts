import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileComponent } from './components/Profile/Profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'movies', component: SearchBarComponent },
  { path: 'movies/movieDetails/:filmTitle', component: MovieDetailsComponent },
  // { path: '**', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
