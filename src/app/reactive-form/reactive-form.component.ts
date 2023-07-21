import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { forbiddenNameValidator } from '../SHARED/user-name.validator';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  constructor( private fb :FormBuilder){

  }
  registrationForm = this.fb.group({
      userName : ['Kate',[Validators.required,Validators.minLength(4),forbiddenNameValidator]],
      password : [''],
      confirmPassword : [''],
  });

  get userName(){
    return this.registrationForm.get('userName');
  }


    // registrationForm = new FormGroup({
    //   userName : new FormControl('Katie'),
    //   password : new FormControl(''),
    //   confirmPassword : new FormControl('')
    // });

    // loadApiData(){
    //   this.registrationForm.setValue({
    //     userName : "Bruce",
    //     password :"test",
    //     confirmPassword : "test"
    //   });

}
