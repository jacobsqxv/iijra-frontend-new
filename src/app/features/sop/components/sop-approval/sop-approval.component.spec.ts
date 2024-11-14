import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopApprovalComponent } from './sop-approval.component';

describe('SopApprovalComponent', () => {
  let component: SopApprovalComponent;
  let fixture: ComponentFixture<SopApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SopApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
