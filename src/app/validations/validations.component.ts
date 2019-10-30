import { Component, OnInit } from "@angular/core";
import { DocumentService } from "src/app/services/document.service";
import { Router } from "@angular/router";
import { UtilService } from "../services/util.service";
import { NgxSpinnerService } from "ngx-spinner";
declare var $;
declare var Swal;

@Component({
  selector: "app-validations",
  templateUrl: "./validations.component.html",
  styleUrls: ["./validations.component.scss"]
})
export class ValidationsComponent implements OnInit {

  ngAfterViewChecked(): void {
    if (this.ValidationArray.length) {
       $('#purchase').DataTable();
    }
  }

  ValidationArray: any = [];
  interval: any;

  constructor(
    private docservice: DocumentService,
    private util: UtilService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getValidationData();
    // this.interval = setInterval(()=> { this.getValidationData2() }, this.docservice.intervalTime);
  }


  getValidationData() {
    this.spinner.show();
    this.docservice.getValidations().subscribe(
      res => {
        this.ValidationArray = res["Data"];
        this.spinner.hide();
      },
      err => {
        this.util.processError(err);
        this.spinner.hide();
      }
    );
  }

  getValidationData2() {
    this.docservice.getValidations().subscribe(
      res => {
        this.ValidationArray = [];
        this.ValidationArray = res["Data"];
      },
      err => {
        this.util.processError(err);
      }
    );
  }
}
