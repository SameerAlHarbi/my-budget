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
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { BeneficiariesListComponent } from './Beneficiaries/beneficiaries-list/beneficiaries-list.component';
import { BeneficiariesEditComponent } from './Beneficiaries/beneficiaries-edit/beneficiaries-edit.component';
import { RelationsComponent } from './relations/relations.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full' }// , canActivate: [AuthGuard]}
  , {path: 'banks', component: BanksComponent, children: [
       {path: '', component: BanksStartComponent}
     , {path: 'new', component: BankEditComponent}
     , {path: ':code', component: BankDetailsComponent, resolve: { bank: BankResolver}}
     , {path: ':code/edit', component: BankEditComponent}
      ]}
  , {path: 'beneficiaries', component: BeneficiariesComponent, children: [
        {path: '', component: BeneficiariesListComponent }
      , {path: 'new', component: BeneficiariesEditComponent}
    ]}
  , {path: 'relations', component: RelationsComponent}
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
