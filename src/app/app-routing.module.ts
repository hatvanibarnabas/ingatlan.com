import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './Components/list/list.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { FavoritesComponent } from './Pages/favorites/favorites.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'details/:adId', component: DetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
