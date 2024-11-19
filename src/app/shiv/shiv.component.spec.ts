import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivComponent } from './shiv.component';

describe('ShivComponent', () => {
  let component: ShivComponent;
  let fixture: ComponentFixture<ShivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
