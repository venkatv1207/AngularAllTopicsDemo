import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtermapiComponent } from './searchtermapi.component';

describe('SearchtermapiComponent', () => {
  let component: SearchtermapiComponent;
  let fixture: ComponentFixture<SearchtermapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchtermapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchtermapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
