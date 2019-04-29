import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuoteComponent } from './delete-quote.component';

describe('DeleteQuoteComponent', () => {
  let component: DeleteQuoteComponent;
  let fixture: ComponentFixture<DeleteQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
