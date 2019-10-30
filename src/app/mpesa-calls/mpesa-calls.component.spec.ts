import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaCallsComponent } from './mpesa-calls.component';

describe('MpesaCallsComponent', () => {
  let component: MpesaCallsComponent;
  let fixture: ComponentFixture<MpesaCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpesaCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpesaCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
