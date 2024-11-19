import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpserviceDemoComponent } from './httpservice-demo.component';

describe('HttpserviceDemoComponent', () => {
  let component: HttpserviceDemoComponent;
  let fixture: ComponentFixture<HttpserviceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpserviceDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpserviceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
