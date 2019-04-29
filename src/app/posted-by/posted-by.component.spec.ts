import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedByComponent } from './posted-by.component';

describe('PostedByComponent', () => {
  let component: PostedByComponent;
  let fixture: ComponentFixture<PostedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
