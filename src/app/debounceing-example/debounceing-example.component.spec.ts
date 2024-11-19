import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceingExampleComponent } from './debounceing-example.component';

describe('DebounceingExampleComponent', () => {
  let component: DebounceingExampleComponent;
  let fixture: ComponentFixture<DebounceingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebounceingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
