import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Components/list/list.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { FavoritesComponent } from './Pages/favorites/favorites.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    DetailComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
