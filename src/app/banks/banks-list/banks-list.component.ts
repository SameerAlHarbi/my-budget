import { Component, OnInit, OnDestroy } from '@angular/core';
import { BanksService } from '../banks.service';
import { Bank } from '../bank.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css']
})
export class BanksListComponent implements OnInit, OnDestroy {

  banksList: Bank[];
  creating = false;
  subscription: Subscription;

  constructor(private banksService: BanksService
            , private router: Router
            , private route: ActivatedRoute) { }

  ngOnInit() {
    this.banksList = this.banksService.getBanks();
    this.subscription = this.banksService.banksChanged.subscribe(
      (banks: Bank[]) => {
        this.banksList = banks;
      });
  }

  onNewBanks() {
    this.creating = true;
    setTimeout(() => {
      this.router.navigate(['new'], {relativeTo: this.route});
      this.creating = !this.creating;
    }, 400);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
