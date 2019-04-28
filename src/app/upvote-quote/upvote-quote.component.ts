import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-upvote-quote',
  templateUrl: './upvote-quote.component.html',
  styleUrls: ['./upvote-quote.component.css']
})
export class UpvoteQuoteComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isUpVote = new EventEmitter()
  upVote() {
    this.isUpVote.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
