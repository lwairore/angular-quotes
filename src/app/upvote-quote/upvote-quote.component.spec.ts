import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoteQuoteComponent } from './upvote-quote.component';

describe('UpvoteQuoteComponent', () => {
  let component: UpvoteQuoteComponent;
  let fixture: ComponentFixture<UpvoteQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvoteQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoteQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
