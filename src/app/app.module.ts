import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent }, //allows me to visit localhost:4200/users
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  {path: 'users/:id/:name', component: UserComponent}, // : means that id will change dynamicly
  {path: 'servers/:id/edit', component: EditServerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) // here we register our routes to angular
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
