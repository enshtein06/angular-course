import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
  				private router: Router,
  				private route: ActivatedRoute) { }
  //by activatedRoute we can inject the current route

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reload() {
  	this.router.navigate(['/servers'], {relativeTo: this.route}); 
  	//this.router.navigate(['servers'], {relativeTo: this.route}); 
  	//when we dont write the position of full path (simply dont type slash infront of servers)
  	//navigate method doesn't know where we are. so if we want to pass route we should type the current route
  }

}
