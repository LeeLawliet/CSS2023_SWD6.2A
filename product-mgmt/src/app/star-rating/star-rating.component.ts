import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges {
  starWidth: number = 0;
  @Input()
  rating: number = 0;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating*24;
  }

  OnClick()
  {
    console.log("Click detected on rating: " + this.rating);
    this.notify.emit("Rating: " + this.rating + " has been clicked.");
  }
}
