import { Component } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  constructor(private _enrollmentService: EnrollmentService){
  }

  topics = ['Angular','React','Vue'];

  userModel = new User('kate','kate@gmail',12345,'default','Morning',true)

  topicHasError = true;
  validateTopic(value:any){
    if (value === 'default'){
      this.topicHasError = true
    }
    else{
      this.topicHasError = false
    }

  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
        data => console.log ("success!" ,data),
        error => console.log ("Error!",error)
    )

  }

}
