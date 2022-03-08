import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxCtrlComponent } from './check-box-ctrl.component';

describe('CheckBoxCtrlComponent', () => {
  let component: CheckBoxCtrlComponent;
  let fixture: ComponentFixture<CheckBoxCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxCtrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
