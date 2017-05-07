import {Component} from '@angular/core';
import {HttpRequestComponent} from "./_httpRequest/httpRequest.component";
import {HTTPRequestService} from "./_httpRequest/httpRequest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [HttpRequestComponent, HTTPRequestService]
})
export class AppComponent {
  today: number = Date.now();
    constructor(private route: ActivatedRoute){
        let pathroots = this.route.pathFromRoot;
        let pathurl = '';
        pathroots.forEach(path => {

            path.url.subscribe(url => {
                url.forEach(e => {
                    pathurl += e + '/';
                });
            });


        });
        console.log(pathurl,'*******************');
    }

  ngOnInit() {

  }

  checkLocal() {
      var bool;
      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          bool = true;
      }
      else {
          bool = false;
      }
      return bool;
  }
}
