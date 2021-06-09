import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../../core/authentication/auth.service';
import { UserRegistration } from '../../shared/models/user.registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  success: boolean | undefined;
  error: string | undefined;
  userRegistration: UserRegistration = { userName: '', email: '', password: '' };
  submitted: boolean = false;
  registerFormGroup: FormGroup;







  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private formbuilder: FormBuilder) {


    this.registerFormGroup = this.formbuilder.group({
      'userName': new FormControl('', [Validators.required, Validators.maxLength(24)]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24)
      ]),
      'confirmPassword': new FormControl('', [Validators.required])
    }, { validator: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    if (form.get('password') && form.get('confirmPassword')) {
      return form.get('password')!.value === form.get('confirmPassword')!.value ? null : { mismatch: true };
    }
    return null;
  }

  ngOnInit() {
  }

  onSubmit() {

    this.spinner.show();

    if (this) {
      this.userRegistration.userName = this.registerFormGroup.get('userName')!.value
      this.userRegistration.email = this.registerFormGroup.get('email')!.value
      this.userRegistration.password = this.registerFormGroup.get('password')!.value

      this.authService.register(this.userRegistration)
        .pipe(finalize(() => {
          this.spinner.hide();
        }))
        .subscribe(
          result => {
            if (result) {
              this.success = true;
            }
          },
          error => {
            this.error = error;
          });
    }
  }
}
