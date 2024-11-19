import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsResponsiveComponent } from './forms-responsive.component';

describe('FormsResponsiveComponent', () => {
  let component: FormsResponsiveComponent;
  let fixture: ComponentFixture<FormsResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsResponsiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
