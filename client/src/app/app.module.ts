import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './management/dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {HttpRequestComponent} from "./_httpRequest/httpRequest.component";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./_guards/auth.guard";
import { ManagementComponent } from './management/management.component';
import { FactureComponent } from './management/facture/facture.component';
import {MaterializeModule} from "angular2-materialize/dist";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    DashboardComponent,
    ContactComponent,
    RegistrationComponent,
    HttpRequestComponent,
    SignupComponent,
    SigninComponent,
    ManagementComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
      MaterializeModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    GithubService,
      AuthGuard,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
