import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var $;
declare var Swal;

@Component({
  selector: 'app-confirmations',
  templateUrl: './confirmations.component.html',
  styleUrls: ['./confirmations.component.scss']
})
export class ConfirmationsComponent implements OnInit {

  ngAfterViewChecked(): void {
    if (this.ConfirmationsArray.length) {
      $('#purchase').DataTable();
    }
  }

  ConfirmationsArray: any = [];
  interval: any;

  constructor(private docservice: DocumentService, private util: UtilService, private router: Router, private spinner: NgxSpinnerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getConfirmationsData();
    // this.interval = setInterval(()=> { this.getConfirmationsData2() }, this.docservice.intervalTime);
  }

  getConfirmationsData() {
    this.spinner.show();
    this.docservice.getConfirmations().subscribe(res => {
      this.ConfirmationsArray = res['Data'];
      this.spinner.hide();
    }, err => {
      this.util.processError(err);
      this.spinner.hide();
    })
  }

  getConfirmationsData2() {
    this.docservice.getConfirmations().subscribe(res => {
      this.ConfirmationsArray = res['Data'];
    }, err => {
      this.util.processError(err);
    })
  }

  Confirmation() {
    this.docservice.ConfirmationAPI().subscribe((response: any) => {
      if (response) {
        this.snackBar.open('ACTION '+ response.ResultDesc, 'Close', {
          duration: 10000,
          panelClass: ['snackbar']
        });
        this.getConfirmationsData2();
      }
    })
  }

  action(conf_ID) {
    this.docservice.conf_id = conf_ID;
    this.Confirmation();
  }

}
