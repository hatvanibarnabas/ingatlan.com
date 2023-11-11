import { Component, Input } from '@angular/core';
import { Data } from '../../Interfaces/data.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  @Input() items:Array<Data>=[];
}
