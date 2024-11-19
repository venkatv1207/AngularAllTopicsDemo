import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsResponsive2Component } from './forms-responsive2.component';

describe('FormsResponsive2Component', () => {
  let component: FormsResponsive2Component;
  let fixture: ComponentFixture<FormsResponsive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsResponsive2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsResponsive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
