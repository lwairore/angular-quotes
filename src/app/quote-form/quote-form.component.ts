import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote:Quote;
  @Input() quotes:Quote;
  userQuote1 = new Quote("","","",new Date (Date.now()))
  
  submitted = false;

  userUpVote = true;
  userDownVote = true;
  counter = 0;
  totalUpVote = 0;
  totalDownVote = 0;
  
    
  upVote() {
    if(this.userUpVote == true){
      this.counter = this.counter + 1;      
      this.totalUpVote += this.counter;      
      this.counter = 0;      
      this.userUpVote = false;      
    }
    else if(this.userUpVote == false) {
      this.totalUpVote = this.totalUpVote - 1;      
      this.userUpVote = true;      
      if(this.totalUpVote < 0) {
        this.totalUpVote = 0;
      }
      
    }
  }

  downVote() {
    if(this.userDownVote == true){
      this.counter = this.counter + 1;      
      this.totalDownVote += this.counter;      
      this.counter = 0;      
      this.userDownVote = false;      
    }
    else if(this.userDownVote == false) {
      this.counter = 1;
      this.totalDownVote = 0;      
      this.userDownVote = true; 
      this.counter = 0;     
      if(this.totalDownVote < 0) {
        this.totalDownVote = 0;
      }
      
    }
  }
    

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
