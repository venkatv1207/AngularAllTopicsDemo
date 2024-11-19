import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsangularComponent } from './formsangular.component';

describe('FormsangularComponent', () => {
  let component: FormsangularComponent;
  let fixture: ComponentFixture<FormsangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsangularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
