import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticatedUser = true;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
     this.authSubscription = this.authService.authenticationChanged.subscribe(
        () => {
          this.authService
          .isAuthenticated().then((authenticated: boolean) => {
          this.isAuthenticatedUser = authenticated;
        });
        });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
