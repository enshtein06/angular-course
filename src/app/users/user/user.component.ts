import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  //activatedRoute object will give access to the id passed in the URL 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.user = {
  		id: this.route.snapshot.params["id"],
  		name: this.route.snapshot.params['name']
  	};
  	this.paramsSubscription = this.route.params.subscribe(//approach to being save if data in the component changed
  		//via subscribe we can be informed about changes on the component, and then 
  		//we could simply execute program inside this method
  		(params: Params) => {
  			this.user.id = params['id'];
  			this.user.name = params['name'];
  		}
  	);
  }

  ngOnDestroy() {
  	this.paramsSubscription.unsubscribe(); // we have to unsubscribe here or before 
  	//component will be destroyed to prevent memory leak 
  }

}
