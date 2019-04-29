import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote( 'Our greatest glory is not in never falling, but in rising every time we fall.', 'Confucius', '~john', new Date(2018,3,14) ),
    
  ]


  completeQuote(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,0)
      
    }
  }
  
  
  counter = 0;
  totalUpVote = 78;
  totalDownVote = 12;
  incrementUpVote(j, index){
    
    
    if(this.quotes[index].userUpVote == true){
      this.counter = this.counter + 1;      
      this.totalUpVote += this.counter;      
      this.counter = 0;      
      this.quotes[index].userUpVote = false;      
    }
    else if(this.quotes[index].userUpVote == false) {
      this.totalUpVote = this.totalUpVote - 1;      
      this.quotes[index].userUpVote = true;      
      if(this.totalUpVote < 0) {
        this.totalUpVote = 0;
      }
      
    }
    
  }

  decrementVote(k, index) {
    this.counter = 0;
    if(this.quotes[index].userDownVote == true) {
      this.counter = this.counter + 1;
      this.totalDownVote += this.counter;
      this.counter = 0;
      this.quotes[index].userDownVote = false;
    } else if(this.quotes[index].userDownVote == false){
      this.totalDownVote = this.totalDownVote - 1;
      this.quotes[index].userDownVote = true;
      if(this.totalDownVote < 0) {
        this.totalDownVote = 0;
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
