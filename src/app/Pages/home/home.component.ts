import { Component } from '@angular/core';
import { JsonDataService } from '../../Service/json-data.service';
import { Data } from '../../Interfaces/data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: Array<Data> = [];
  constructor(private service:JsonDataService) {

  }
  ngOnInit() {
    this.data=this.service.getAll();
  }
}
