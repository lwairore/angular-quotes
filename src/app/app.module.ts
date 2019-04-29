import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './author/author.component';
import { PostedByComponent } from './posted-by/posted-by.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';
import { UpvoteQuoteComponent } from './upvote-quote/upvote-quote.component';
import { DownVoteComponent } from './down-vote/down-vote.component';
import { PostedOnPipe } from './posted-on.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AuthorComponent,
    PostedByComponent,
    QuoteFormComponent,
    DeleteQuoteComponent,
    UpvoteQuoteComponent,
    DownVoteComponent,
    PostedOnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
