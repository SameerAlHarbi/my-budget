import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BanksComponent } from './banks/banks.component';
import { BanksStartComponent } from './banks/banks-start/banks-start.component';
import { BankDetailsComponent } from './banks/bank-details/bank-details.component';
import { BankResolver } from './banks/bank-resolver.service';
import { BankEditComponent } from './banks/bank-edit/bank-edit.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full' }// , canActivate: [AuthGuard]}
  , {path: 'banks', component: BanksComponent, children: [
       {path: '', component: BanksStartComponent}
     , {path: 'new', component: BankEditComponent}
     , {path: ':code', component: BankDetailsComponent, resolve: { bank: BankResolver}}
     , {path: ':code/edit', component: BankEditComponent}
      ]}
  , {path: 'login', component: LoginComponent}
  , {path: 'not-found', component: ErrorPageComponent
      , data : { errorType: 'notfound', message: 'Page not found'}}
  , {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
