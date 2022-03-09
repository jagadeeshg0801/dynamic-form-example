import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  regForm: FormGroup = this.fb.group({});
  formControls: any[]  = [];
  constructor(private fb: FormBuilder,
    private http: HttpClient) { 
      this.buildDynamicForm();
    }

  ngOnInit(): void {
  }
  
  buildDynamicForm(){
    let control: any = {};
    this.http.get('assets/dynamic-form.json').subscribe((formData: any) => {
      this.formControls = [...formData];
      this.formControls.forEach(element => {
        let validations:any = [];
        element.validations.forEach((validator:any) =>{
          switch(validator.name){
            case 'required':
              validations.push(Validators.required);
              break;
            case 'email':
              validations.push(Validators.email);
              break;
            case 'maxLength':
              validations.push(Validators.maxLength(validator.length));
              break;
            case 'minLenght':
              validations.push(Validators.minLength(validator.length));
              break;
            case 'pattern':
              if(validator.validator == 'mobile'){
                validations.push(Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"));
              }
              break;
            default :
            console.log('default block')
          }
        })
        // if(element.inputType == 'radio'){
        //   let subCtrl:any = {};
        //  element['options'].forEach((subControl : any)=> {
        //   subCtrl[subControl.key] = new FormControl('');
        //  });
        //  control[element.name] = this.fb.group(subCtrl)
        // }
        // else
        control[element.name] = new FormControl('', validations);
      });
      console.log("control", control)
      this.regForm = this.fb.group(control);
      console.log("form", this.regForm)
    });

   
  }


  submitForm(){
    console.log('form data', this.regForm.value);
  }
}
