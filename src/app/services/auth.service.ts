import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  route_url = '';
  user_details: any;
  doc_permissions: any = [];
  acc_permissions: any = [];

  constructor(private http: HttpClient, private util: UtilService, private router: Router) { }

  doLogin(_input) {
    // return this.http.post<any>(this.baseUrl + 'userapi_service/auth/login', _input);
    return this.http.post<any>('https://api.supplychainh.com/userapi_service/auth/login', _input);
  }
  allowLogin() {
    if (this.util.getCookie('accessToken'))
      return this.router.navigate(['/customers'])
  }
  isLoggedIn(url): boolean {
    this.route_url = url;
    if (!this.util.getCookie('accessToken')) {
      this.router.navigate(['/']);
      return false;
    }
    this.decodeCookie();
    return true;
  }
  decodeCookie() {
    let token = this.util.getCookie('accessToken');
    this.user_details = this.parseJwt(token);
    let per_list = this.user_details.userdata[0].permissionclass;
    this.doc_permissions = per_list.find(rec => {
      return rec.permissionclass_field == "doctype"
    }).from_values;
    this.acc_permissions = per_list.find(rec => {
      return rec.permissionclass_field == "activity"
    }).from_values;
  }
  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };
}
