import { Component } from "@angular/core";
import {Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {Router} from "@angular/router";

@Component({

})
export class AuthService {
    public token: string;
    constructor(private http: Http, private route: Router) {
        // set token if saved in local storage
        //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //this.token = currentUser && currentUser.token;
    }

    signup(object) {
        return this.http.post('http://localhost:8000/api/addUser',
            object,
            {
                headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
            }
        );
    }

    signIn(email: string, password: string) {
        return this.http.post('http://localhost:8000/api/user/signin',
            {email: email, password: password},
            {
                headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
            }
        ).map((response: Response) => {
            this.token = response.json().token;
            const base64Url = this.token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return { token: this.token, decoded: JSON.parse(window.atob(base64))};
        })
            .do(
                tokenData => {
                    //localStorage.setItem('token', tokenData.token);
                    localStorage.setItem('currentUser', JSON.stringify({ username: email, token: tokenData.token }));
                    this.route.navigate(['/management']);
                }
            );
    }
    signOut(): void {
        if(localStorage.getItem('currentUser')){
            this.route.navigate(['']);
        }
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}