import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydbComponent } from './twowaydb.component';

describe('TwowaydbComponent', () => {
  let component: TwowaydbComponent;
  let fixture: ComponentFixture<TwowaydbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowaydbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwowaydbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
