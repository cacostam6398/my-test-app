import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedCreditsComponent } from './rejected-credits.component';

describe('RejectedCreditsComponent', () => {
  let component: RejectedCreditsComponent;
  let fixture: ComponentFixture<RejectedCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
