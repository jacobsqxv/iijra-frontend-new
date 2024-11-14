import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopReviewComponent } from './sop-review.component';

describe('SopReviewComponent', () => {
  let component: SopReviewComponent;
  let fixture: ComponentFixture<SopReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SopReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
