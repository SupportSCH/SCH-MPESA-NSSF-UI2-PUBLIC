import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  sidenav: boolean = false;
  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  processError(error: any) {
    this.openSnackBar(error.error.message, 'Dismiss', 3000);
    if (error.error.code == 401) {
      this.clearCookie();
    }
  }
  clearCookie() {
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.router.navigate(['/'])
  }
  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, { duration });
  }
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
