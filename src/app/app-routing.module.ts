import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BanksComponent } from './banks/banks.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full' }// , canActivate: [AuthGuard]}
  , {path: 'banks', component: BanksComponent}
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
