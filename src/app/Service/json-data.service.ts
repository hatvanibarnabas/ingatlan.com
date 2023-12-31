import { Injectable } from '@angular/core';
import { Data } from '../Interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  data:Array<Data> = [
      {
        "adId": 100001,
        "address": "XIX. kerület, Kitalált utca 8.",
        "price": 45000000,
        "image": "https://placehold.jp/800x600.png",
        "currency": "Ft",
        "uploadDate": "2021.10.20.",
        "description": "Szép csendes környezetben eladó egy felújítandó lakás. A lakáshoz tartozik egy 10 négyzetméteres tároló is ami a pincében található.",
        "status": "unchecked",
        "contact": {
          "email": "elek8812@gmail.com",
          "parsedPhoneNumbers": [
            "+36201234567",
            "+36702349483"
          ]
        }
      },
      {
        "adId": 100002,
        "address": "Székesfehérvár, Palotai út 88.",
        "price": 23000000,
        "image": "https://placehold.jp/800x600.png",
        "currency": "Ft",
        "uploadDate": "2021.10.13.",
        "description": "Székesfehérvár belvárosában eladó egy felújított belső kétszintes lakás. A lakáshoz tartozik egy 110 négyzetméteres kis kert is kizárólagos használati joggal.",
        "status": "unchecked",
        "contact": {
          "email": "lek882@gmail.com",
          "parsedPhoneNumbers": [
            "+36701234563"
          ]
        }
      },
      {
        "adId": 100003,
        "address": "Érd, Kossuth Lajos utca 888/A.",
        "price": 322000000,
        "image": "https://placehold.jp/366x377.png",
        "currency": "Ft",
        "uploadDate": "2021.10.10.",
        "description": "Kertvárosi környezetben eladó egy két szintes családi ház. A házban van egy dupla beállós garázs is.",
        "status": "checked",
        "contact": {
          "email": "ek8812@freemail.hu",
          "parsedPhoneNumbers": [
            "+36201234568"
          ]
        }
      },
      {
        "adId": 100004,
        "address": "XXII. kerület, Kitalált utca 10.",
        "price": 90000,
        "image": "https://placehold.jp/500x400.png",
        "currency": "Euro",
        "uploadDate": "2021.10.09.",
        "description": "Kihasználatlanság miatt eladó szeretett otthonunk. A ház teljeskörűen fel lett újítva. Az ár tartalmazza az új konyhabútort is, így az ár nem alku képes.",
        "status": "checked",
        "contact": {
          "email": "kele12@citromail.hu",
          "parsedPhoneNumbers": [
            "+36201234569"
          ]
        }
      }
    ];



  constructor() { }

  getAll() {
    return this.data;
  }
  getById(adId: number) {
    return this.data.find(item=>item.adId===adId);
  }
  toggleFavorite(adId:number) {
    const item=this.data.find(item=>item.adId===adId);
    if(item) {
      if(item.status === "checked") {
        item.status="unchecked";
      } else {
        item.status="checked";
      }
    }
  }
  getAllFavorites() {
    return this.data.filter(item=>item.status === "checked");
  }
}
