import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedCreditsComponent } from './approved-credits.component';

describe('ApprovedCreditsComponent', () => {
  let component: ApprovedCreditsComponent;
  let fixture: ComponentFixture<ApprovedCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
