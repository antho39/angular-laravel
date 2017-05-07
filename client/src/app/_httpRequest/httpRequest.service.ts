import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Component({

})
export class HTTPRequestService {
    constructor (private _http:Http) {}
    baseURL = "http://localhost:8000/api/";
    getJSON() {
        return this._http.get(this.baseURL+"user-list").map(res => res.json());
    }

    postJSON(object,request) {

        var json = JSON.stringify(object);
        var headers = new Headers();
        headers.append('Content-Type', "application/json");

        return this._http.post(this.baseURL+request, json, {
            headers: headers
        }).map(res => res.json());
    }
}