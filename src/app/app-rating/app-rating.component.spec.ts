import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRatingComponent } from './app-rating.component';

describe('AppRatingComponent', () => {
  let component: AppRatingComponent;
  let fixture: ComponentFixture<AppRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
