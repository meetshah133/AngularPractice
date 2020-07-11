import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
  
})
export class FavoriteComponent implements OnInit {

  constructor() { }
  @Input()  //To allow its value to be changed by parent componenet
  isFavorite=false;
  onClick(){
    this.isFavorite = !this.isFavorite
  }

  ngOnInit() {
  }

}
