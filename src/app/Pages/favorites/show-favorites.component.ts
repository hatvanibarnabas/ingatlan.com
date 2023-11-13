import { Component, Input } from '@angular/core';
import { Data } from '../../Interfaces/data.interface';
import { JsonDataService } from '../../Service/json-data.service';


@Component({
  selector: 'app-show-favorites',
  templateUrl: './show-favorites.component.html',
  styleUrl: './show-favorites.component.scss'
})
export class ShowFavoritesComponent {
  constructor(private service:JsonDataService, private _location: Location) {}
  favoriteData=this.service.getAllFavorites();
}

