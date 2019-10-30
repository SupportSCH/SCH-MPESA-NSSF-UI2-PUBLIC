import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { AuthService } from '../services/auth.service';
declare var $;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private util: UtilService, public auth: AuthService) { }


  ngOnInit() {
  }

  logout() {
    this.auth.route_url = null;
    this.util.clearCookie();
  }

  sidenav() {
    if (this.util.sidenav) {
      $("#next-app-header").toggleClass("closed-sidebar");
    }
  }

  sidenav_t() {
    if (this.util.sidenav) {
      $("#next-app-header").toggleClass("sidebar-mobile-open");
    }
  }

  sidenav_m() {
    if (this.util.sidenav) {
      $("#next-app-header").toggleClass("sidebar-mobile-open");
    }
  }
  nav_mm() {
    if (this.util.sidenav) {
      $("#nav_mm").toggleClass("mm-active");
      $(".mm-collapse").toggleClass("mm-show");
    }
  }
}
