import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  Datalist = [];
  ngOnInit() {
    this.Datalist = JSON.parse(localStorage.getItem('AddData'));
    console.log(this.Datalist, "this.Datalist");
  }
  onPrint() {
    window.print();
  }
}
