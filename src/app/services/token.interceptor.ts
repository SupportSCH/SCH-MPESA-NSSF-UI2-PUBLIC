import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private util: UtilService) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.util.getCookie('accessToken');
    if (token)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    return next.handle(request);
  }
}