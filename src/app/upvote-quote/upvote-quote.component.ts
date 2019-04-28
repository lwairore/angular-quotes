import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-upvote-quote',
  templateUrl: './upvote-quote.component.html',
  styleUrls: ['./upvote-quote.component.css']
})
export class UpvoteQuoteComponent implements OnInit {
  @Input() quote:Quote;
  

  constructor() { }

  ngOnInit() {
  }

}
