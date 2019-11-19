import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-update-awesome',
  templateUrl: './update-awesome.component.html',
  styleUrls: ['./update-awesome.component.css']
})
export class UpdateAwesomeComponent implements OnInit, OnDestroy {

  isSuccess = false;
  public subscription: Subscription;
  public awesome: Awesome;
  public subscriptionParams: Subscription;

  constructor(
    public awesomeService: AwesomeService,
    public routerService: Router,
    public activateRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.awesome = new class implements Awesome {
      descriptions: string;
      id: number;
      tag: string;
      url: string;
    }();
    this.loadData();
  }
  loadData() {
    this.subscriptionParams = this.activateRouteService.params.subscribe(data => {
      const i = data.id;
      this.getAwesome(i);
    });
  }
  getAwesome(id) {
     this.subscription = this.awesomeService.getAwesome(id).subscribe((awesome: Awesome) => {
      this.awesome = awesome;
    });
  }
  onEditAwesome() {
    this.subscription = this.awesomeService.updateAwesome(this.awesome).subscribe(data => {
      this.routerService.navigateByUrl('awesomes');
      this.isSuccess = true;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}
