import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopInitiationComponent } from './sop-initiation.component';

describe('SopInitiationComponent', () => {
  let component: SopInitiationComponent;
  let fixture: ComponentFixture<SopInitiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopInitiationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SopInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
