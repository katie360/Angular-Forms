import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  topics = ['Angular','React','Vue'];

  userModel = new User('kate','kate@gmail',12345,'','Morning',true)

}
