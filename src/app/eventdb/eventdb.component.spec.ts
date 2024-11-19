import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdbComponent } from './eventdb.component';

describe('EventdbComponent', () => {
  let component: EventdbComponent;
  let fixture: ComponentFixture<EventdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventdbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
