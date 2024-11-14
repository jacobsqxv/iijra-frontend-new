import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopHistoryComponent } from './sop-history.component';

describe('SopHistoryComponent', () => {
  let component: SopHistoryComponent;
  let fixture: ComponentFixture<SopHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SopHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
