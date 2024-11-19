import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydbComponent } from './propertydb.component';

describe('PropertydbComponent', () => {
  let component: PropertydbComponent;
  let fixture: ComponentFixture<PropertydbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertydbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertydbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
