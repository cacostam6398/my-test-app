import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryCreditsComponent } from './view-history-credits.component';

describe('ViewHistoryCreditsComponent', () => {
  let component: ViewHistoryCreditsComponent;
  let fixture: ComponentFixture<ViewHistoryCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHistoryCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
