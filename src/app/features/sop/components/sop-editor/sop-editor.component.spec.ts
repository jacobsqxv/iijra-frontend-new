import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopEditorComponent } from './sop-editor.component';

describe('SopEditorComponent', () => {
  let component: SopEditorComponent;
  let fixture: ComponentFixture<SopEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SopEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
