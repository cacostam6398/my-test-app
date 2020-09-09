import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCreditsComponent } from './pending-credits.component';

describe('PendingCreditsComponent', () => {
  let component: PendingCreditsComponent;
  let fixture: ComponentFixture<PendingCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
