import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationdbComponent } from './interpolationdb.component';

describe('InterpolationdbComponent', () => {
  let component: InterpolationdbComponent;
  let fixture: ComponentFixture<InterpolationdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationdbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
