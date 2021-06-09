import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from 'src/app/shared/models/user.login';
import { AuthService } from '../../core/authentication/auth.service';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  success: boolean | undefined;
  error: string | undefined;
  userLogin: UserLogin = { userName: '', password: '' };
  loginFormGroup: FormGroup;

  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private route: ActivatedRoute, private toastr: ToastrService, private formbuilder: FormBuilder) {


    this.loginFormGroup = this.formbuilder.group({
      'userName': new FormControl('', [Validators.required, Validators.maxLength(24)]),
      'password': new FormControl('', [
        Validators.required
      ]),
    });

  }


  onSubmit() {

    this.spinner.show();

    if (this) {
      this.userLogin.userName = this.loginFormGroup.get('userName')!.value;
      this.userLogin.password = this.loginFormGroup.get('password')!.value;

      this.authService.login(this.userLogin)
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

    ngOnInit() {
      this.route.queryParams
      .subscribe(params => {
        if(params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Registration Successful', 'Please Login');
        }
      });
    }
}
