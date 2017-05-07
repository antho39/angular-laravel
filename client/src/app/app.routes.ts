import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {AuthGuard} from "./_guards/auth.guard";
import {DashboardComponent} from "./management/dashboard/dashboard.component";
import {FactureComponent} from "./management/facture/facture.component";
import {ManagementComponent} from "./management/management.component";

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'management', component: ManagementComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'facture', component: FactureComponent }
    ] },
  { path: 'about', component: AboutComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signIn', component: SigninComponent }

];