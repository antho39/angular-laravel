import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
    providers: [AuthService]
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
      // reset login status
      this.authService.signOut();
  }

  onSignIn(form: NgForm) {
    this.authService.signIn(form.value.email, form.value.password)
        .subscribe(
            tokenData => console.log(tokenData),
            error => console.log(error)
        )
  }

}
