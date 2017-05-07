import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import CustomValidators from '../forms/CustomValidators';
import {User} from "../_models/User";
import DateTimeFormat = Intl.DateTimeFormat;
import {DatePipe} from "@angular/common";
import {Response} from "@angular/http";
import * as http from "selenium-webdriver/http";
import {HTTPRequestService} from "../_httpRequest/httpRequest.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [HTTPRequestService]
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    formBuilder: FormBuilder;
    user: User;
    getData:string;
    responseData:string;



    constructor(private _httpService: HTTPRequestService,
    private route: Router) {};


    ngOnInit() {
        this.formBuilder = new FormBuilder();
        this.registrationForm = this.formBuilder.group({
            familyname: ['', Validators.required],
            firstname: ['', Validators.required],
            email: ['', [Validators.required, CustomValidators.validateEmail]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    onSubmit(value) {

        if(value) {
            if(value.password == value.confirmPassword) {
                value.complet = value.familyname+ " " + value.firstname;
                value.activated = 1;
                this.user = new User(value.complet, value.email, value.password, value.activated);

                this._httpService.postJSON(this.user, "addUser").subscribe(
                    data => this.responseData = JSON.stringify(data),
                    error => console.log(error),
                    () => {
                        var t = JSON.parse(this.responseData);
                        alert(t.message);
                        this.route.navigate([''])
                    }

                );
            }
            else {
                console.log("Votre mot de passe ne correspond pas");
            }
        }

    }
    submitForm() {
        this._httpService.getJSON().subscribe(
            data => this.getData = JSON.stringify(data),
            error => console.log(error),
            () => console.log("Finished")
        );
    }
}
