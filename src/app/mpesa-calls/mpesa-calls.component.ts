import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
declare var $;
declare var Swal;
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-mpesa-calls',
  templateUrl: './mpesa-calls.component.html',
  styleUrls: ['./mpesa-calls.component.scss']
})
export class MpesaCallsComponent implements OnInit {

  ngAfterViewChecked(): void {
    if (this.MpesaCallsArray.length) {
      $('#purchase').DataTable();
    }
  }

  MpesaCallsArray: any = [];
  interval: any;

  constructor(private docservice: DocumentService, private util: UtilService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getMpesaCallsData();
    // this.interval = setInterval(() => { this.getMpesaCallsData2() }, this.docservice.intervalTime);
  }

  getMpesaCallsData() {
    this.spinner.show();
    this.docservice.getMpesaCalls().subscribe(res => {
      this.MpesaCallsArray = res['Data'];
      this.spinner.hide();
    }, err => {
      this.util.processError(err);
      this.spinner.hide();
    })
  }

  getMpesaCallsData2() {
    this.docservice.getMpesaCalls().subscribe(res => {
      this.MpesaCallsArray = res['Data'];
    }, err => {
      this.util.processError(err);
    })
  }

}
