import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindingListenComponent } from './host-binding-listen.component';

describe('HostBindingListenComponent', () => {
  let component: HostBindingListenComponent;
  let fixture: ComponentFixture<HostBindingListenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostBindingListenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostBindingListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
