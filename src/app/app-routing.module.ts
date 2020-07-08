import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProfileComponent } from './components/Profile/Profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'favorites', component: SearchBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
