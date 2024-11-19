import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentParentComponent } from './ngcontent-parent.component';

describe('NgcontentParentComponent', () => {
  let component: NgcontentParentComponent;
  let fixture: ComponentFixture<NgcontentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgcontentParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgcontentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
