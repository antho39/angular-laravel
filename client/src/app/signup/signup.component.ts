import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../_models/User";
import { toast } from "angular2-materialize/dist";
import {Router} from "@angular/router";

declare var Materialize:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
    providers:[AuthService]
})
export class SignupComponent implements OnInit {

    user: User;

  constructor(private authService: AuthService, private route: Router) { }

    toast(text: string, duration: number = 3000, style: string = ""){
        Materialize.toast(text, duration, style);
    }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    if(form.value.password == form.value.confirmPassword) {
        var complet = form.value.name + " " + form.value.firstname;

            this.user = new User(complet, form.value.email, form.value.password, 1);

        this.authService.signup(this.user)
            .subscribe(
                response => {
                    console.log(response);
                    toast("Le compte a bien été créé! Pensez à vérifier vos mails", 10000);
                    this.route.navigate([''])
                },
                error => console.log(error)
            );
    }

  }

}
