import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-pwa';
  postMethod = "POST";
  getMethod = "GET";
  public foods;
  logindatadata = [];
  constructor(public Http: HttpClient) { }
  ngOnInit() {
    this.Http.get('http://dignizant.com/wedding/admin/service/faq.php').subscribe(
      data => { this.foods = data },
      err => console.error(err),
      // () => this.logindatadata = this.foods
      () => this.logindatadata = this.foods["data"]
    );

    this.Http.get('http://dignizant.com/wedding/admin/service/faq.php');

  }


}
