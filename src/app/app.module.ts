import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NgxSpinnerModule } from "ngx-spinner";



import {
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatMenuModule,
  MatChipsModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatDialogModule,
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TokenInterceptor } from './services/token.interceptor';
import { CustomersComponent } from './customers/customers.component';
import { ValidationsComponent } from './validations/validations.component';
import { ConfirmationsComponent } from './confirmations/confirmations.component';
import { MpesaCallsComponent } from './mpesa-calls/mpesa-calls.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    CustomersComponent,
    ValidationsComponent,
    ConfirmationsComponent,
    MpesaCallsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDialogModule,
    NgxSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
