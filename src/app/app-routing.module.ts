import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmationsComponent } from './confirmations/confirmations.component';
import { CustomersComponent } from './customers/customers.component';
import { ValidationsComponent } from './validations/validations.component';
import { MpesaCallsComponent } from './mpesa-calls/mpesa-calls.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    // component: ConfirmationsComponent,
  },
  {
    path: '',
    component: SidenavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'confirmations',
        component: ConfirmationsComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'validations',
        component: ValidationsComponent,
      },
      {
        path: 'Mpesa-calls',
        component: MpesaCallsComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
