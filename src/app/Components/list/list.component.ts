import { Component, Input } from '@angular/core';
import { Data } from '../../Interfaces/data.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() items:Array<Data>=[];
}
