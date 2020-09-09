import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreditDialogComponent } from './form-credit-dialog.component';

describe('FormCreditDialogComponent', () => {
  let component: FormCreditDialogComponent;
  let fixture: ComponentFixture<FormCreditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
