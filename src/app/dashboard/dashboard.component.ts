import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
declare var $;
declare var Swal;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  DashboardDataArray: any = [];
  
  constructor(private docservice: DocumentService, private util: UtilService) {
  }

  ngOnInit() {
    this.getDashboardData();
  }


  getDashboardData() {
    this.docservice.getDashboardData().subscribe(res => {
      this.DashboardDataArray = res['Data'];
      console.log(this.DashboardDataArray);
    }, err => {
      this.util.processError(err);
    })
  }

}
