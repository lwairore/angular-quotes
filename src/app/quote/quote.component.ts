import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote( 'Our greatest glory is not in never falling, but in rising every time we fall.', 'Confucius', '~john' ),
    new Quote( 'All our dreams can come true, if we have the courage to pursue them.', 'Walt Disney', 'J.Kelly',  )
  ]

  constructor() { }

  ngOnInit() {
  }

}
