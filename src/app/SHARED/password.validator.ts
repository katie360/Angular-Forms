import { AbstractControl } from "@angular/forms";

export function  PasswordValidator(control:AbstractControl): {[key:string]:any}  | null{
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? {'mismatch':true}:null;
}
