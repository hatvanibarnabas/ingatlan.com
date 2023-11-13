import { Component, Input } from '@angular/core';
import { Data } from '../../Interfaces/data.interface';
import { JsonDataService } from '../../Service/json-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input() items:Array<Data>=[];
}
