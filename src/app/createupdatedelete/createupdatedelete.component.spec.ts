import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateupdatedeleteComponent } from './createupdatedelete.component';

describe('CreateupdatedeleteComponent', () => {
  let component: CreateupdatedeleteComponent;
  let fixture: ComponentFixture<CreateupdatedeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateupdatedeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateupdatedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
