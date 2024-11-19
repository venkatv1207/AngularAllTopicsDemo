import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveDemoComponent } from './form-reactive-demo.component';

describe('FormReactiveDemoComponent', () => {
  let component: FormReactiveDemoComponent;
  let fixture: ComponentFixture<FormReactiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReactiveDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
