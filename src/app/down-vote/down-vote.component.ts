import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-down-vote',
  templateUrl: './down-vote.component.html',
  styleUrls: ['./down-vote.component.css']
})
export class DownVoteComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isDownVote = new EventEmitter();

  downVote() {
    this.isDownVote.emit();
  }



  constructor() { }

  ngOnInit() {
  }

}
