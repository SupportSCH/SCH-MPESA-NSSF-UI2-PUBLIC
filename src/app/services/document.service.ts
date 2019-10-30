import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl = environment.baseUrl;
  intervalTime = 5000;
  conf_id: any;

  constructor(private http: HttpClient) { }
  

  getCustomer(){
    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.baseUrl + 'get-customers', requestOptions);
  }

  getValidations(){
    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.baseUrl + 'get-validations', requestOptions);
  }

  getConfirmations(){

    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.baseUrl + 'get-confirmations', requestOptions);
  }

  getMpesaCalls(){
 
    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.baseUrl + 'get-mpesa-calls', requestOptions);
  }

  getDashboardData(){
    
    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.baseUrl + 'get-dashboard-values', requestOptions);
  }

  ConfirmationAPI(){

    let data = {
      "confirmation_ids": this.conf_id
    }

    const headerDict = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.baseUrl + 'postSAPFIWeb', JSON.stringify(data), requestOptions);
  }
}
