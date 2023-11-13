import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Components/list/list.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ShowFavoritesComponent } from './Pages/favorites/show-favorites.component';
import { FavoritesComponent } from './Components/favorites/favorites.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    DetailComponent,
    FavoritesComponent,
    ShowFavoritesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
