import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStyledbComponent } from './class-styledb.component';

describe('ClassStyledbComponent', () => {
  let component: ClassStyledbComponent;
  let fixture: ComponentFixture<ClassStyledbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassStyledbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassStyledbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
