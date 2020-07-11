import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likecomp',
  templateUrl: './likecomp.component.html',
  styleUrls: ['./likecomp.component.css']
})
export class LikecompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  totalLikes = 0;
     iLike = false;
    
    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }


}
