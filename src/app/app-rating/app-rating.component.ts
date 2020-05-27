import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './app-rating.component.html',
  styleUrls: ['./app-rating.component.css']
})
export class AppRatingComponent implements OnInit {

  @Input() maxRating: number
  @Input() actRating: number
  @Input() mute?: boolean;
  @Output() actRatingChange? = new EventEmitter<number>();
  @Output() rating? = new EventEmitter<number>()
  ratingItems: Array<number>
  

  onClick(x: number){
    this.actRating = x
    this.actRatingChange.emit(this.actRating)
    this.rating.emit(this.actRating)
  }

  constructor() { 
    this.actRating = 0
    this.maxRating = 0
    this.mute = false
  }

  ngOnInit(): void {
    this.ratingItems = [];
    for (let i = 0; i < this.maxRating; i++) {
      this.ratingItems.push(i + 1);
    }
    //console.log(this.ratingItems)
  }

}
