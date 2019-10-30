import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { UtilService } from '../../services/util.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform: FormGroup;
  constructor(private auth: AuthService, private util: UtilService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.auth.allowLogin();
    document.body.classList.add('next-auth-bg')
  }

  onSubmit(_valid, _value) {
    if (_valid) {
      this.auth.doLogin(_value).subscribe(res => {
        document.cookie = `accessToken=${res.accessToken};max-age=${23 * 60 * 60 * 1000}`;
        let redirect_url = this.auth.route_url || '/customers';
        this.util.sidenav = true;
        this.router.navigate([redirect_url]);
      }, err => {
        this.util.processError(err);
      })
    } else {
      let ctrl = this.loginform.controls;
      let msg = '';
      if (ctrl.email.errors) {
        if (ctrl.email.errors.required) {
          msg = 'Email should not be empty';
        } else {
          msg = 'Email should be valid '
        }
      } else if (ctrl.password.errors) {
        msg = 'Password should not be empty';
      }
      this.util.openSnackBar(msg, 'dismiss', 3000)
    }
  }
  ngOnDestroy() {
    document.body.classList.remove("next-auth-bg")
  }
}
