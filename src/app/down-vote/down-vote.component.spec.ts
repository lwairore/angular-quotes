import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownVoteComponent } from './down-vote.component';

describe('DownVoteComponent', () => {
  let component: DownVoteComponent;
  let fixture: ComponentFixture<DownVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
