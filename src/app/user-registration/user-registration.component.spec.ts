import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserRegistrationComponent } from './user-registration.component';

describe('UserRegistrationComponent', () => {

  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let regForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponent ],
      imports: [HttpClientModule],
      providers: [FormBuilder,HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    regForm = component.regForm
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should buid regForm', ()=>{

  })

  it('')
});
