import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $;
declare var Swal;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  ngAfterViewChecked(): void {
    if (this.CustomerArray.length) {
      $('#purchase').DataTable();
    }
  }

  CustomerArray: any = [];

  constructor(private docservice: DocumentService, private util: UtilService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getCustomersData();
  }

  getCustomersData() {
    this.spinner.show();
    this.docservice.getCustomer().subscribe(res => {
      this.CustomerArray = res['Data'];
      this.spinner.hide();
    }, err => {
      this.util.processError(err);
      this.spinner.hide();
    })
  }
 
}
