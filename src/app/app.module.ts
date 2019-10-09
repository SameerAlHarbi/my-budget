import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { fromStringWithSourceMap } from 'source-list-map';

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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
