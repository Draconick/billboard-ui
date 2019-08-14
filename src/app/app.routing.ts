import { WarningRegisterComponent } from './warning-register/warning-register.component';
import { WarningDetailComponent } from './warning-detail/warning-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'warning/detail/:id', component: WarningDetailComponent},
  {path: 'warning/register', component: WarningRegisterComponent},
  {path: 'warning/register/:id', component: WarningRegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
