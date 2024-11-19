import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentChildComponent } from './ngcontent-child.component';

describe('NgcontentChildComponent', () => {
  let component: NgcontentChildComponent;
  let fixture: ComponentFixture<NgcontentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgcontentChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgcontentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
