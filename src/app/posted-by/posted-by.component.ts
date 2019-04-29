import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-posted-by',
  templateUrl: './posted-by.component.html',
  styleUrls: ['./posted-by.component.css']
})
export class PostedByComponent implements OnInit {
  @Input() quote:Quote
  constructor() { }

  ngOnInit() {
  }

}
