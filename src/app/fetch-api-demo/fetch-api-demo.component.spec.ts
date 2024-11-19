import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchApiDemoComponent } from './fetch-api-demo.component';

describe('FetchApiDemoComponent', () => {
  let component: FetchApiDemoComponent;
  let fixture: ComponentFixture<FetchApiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchApiDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchApiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
