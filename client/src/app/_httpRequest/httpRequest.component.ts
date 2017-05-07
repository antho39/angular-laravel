import { Component } from '@angular/core';
import { HTTPRequestService } from './httpRequest.service';

@Component({
    selector: 'http-request',
    template:"<button (click)='onTestGet()'>Test Get Request</button><br>"+
    "<p>Output: {{getMyData}}</p>"+
"<button>Test Post Request</button>"+
"<p>Output: {{ postMyData }}</p>",
    styleUrls: ['./httpRequest.component.css'],
    providers: [HTTPRequestService]
})
export class HttpRequestComponent {
    getMyData:string;
    postMyData:string;

    constructor(private _httpService: HTTPRequestService) {}

    onTestGet() {
        this._httpService.getJSON()
            .subscribe(
                data => this.getMyData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            )
    }
}
