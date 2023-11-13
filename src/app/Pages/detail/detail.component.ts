import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { JsonDataService } from '../../Service/json-data.service';
import { Data } from '../../Interfaces/data.interface';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  constructor(private activatedRout:ActivatedRoute, private service: JsonDataService, private _location: Location) {}
  addId = this.activatedRout.snapshot.paramMap.get("adId");
  item = this.service.getById(Number(this.addId));

  backClicked() {
    this._location.back();
  }
}
