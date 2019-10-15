import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BanksComponent } from './banks/banks.component';
import { BanksListComponent } from './banks/banks-list/banks-list.component';
import { BankItemComponent } from './banks/banks-list/bank-item/bank-item.component';
import { BanksSummaryComponent } from './banks/banks-summary/banks-summary.component';
import { BanksStartComponent } from './banks/banks-start/banks-start.component';
import { BankDetailsComponent } from './banks/bank-details/bank-details.component';
import { BankEditComponent } from './banks/bank-edit/bank-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { BeneficiariesSummaryComponent } from './Beneficiaries/beneficiaries-summary/beneficiaries-summary.component';
import { BeneficiariesEditComponent } from './Beneficiaries/beneficiaries-edit/beneficiaries-edit.component';
import { BeneficiariesDetailsComponent } from './Beneficiaries/beneficiaries-details/beneficiaries-details.component';
import { BeneficiariesListComponent } from './Beneficiaries/beneficiaries-list/beneficiaries-list.component';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    BanksComponent,
    BanksListComponent,
    BankItemComponent,
    BanksSummaryComponent,
    BanksStartComponent,
    BankDetailsComponent,
    BankEditComponent,
    DropdownDirective,
    BeneficiariesComponent,
    BeneficiariesSummaryComponent,
    BeneficiariesEditComponent,
    BeneficiariesDetailsComponent,
    BeneficiariesListComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
