import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private sub: any;
  constructor(private route: ActivatedRoute, private parentRouter: Router) { }
  Datalist = [];
  urldata: string;
  addData: any = {};
  available: string;
  fileToUploadlogo: File = null;
  image = '';
  data = [];
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.urldata = params['id'];
    });
    this.Datalist = JSON.parse(localStorage.getItem('AddData'));
    this.Datalist.forEach(element => {
      if (element.id == this.urldata) {
        this.available = element.available;

        this.addData = element
      }
    });
  }
  fileChange(files: FileList) {
    this.fileToUploadlogo = files.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event: any) => {
      this.image = event.target.result;
    }
  }
  Upadte() {
    var newItem = this.addData.id
    const index = this.Datalist.findIndex(el => el.id === newItem);
    this.Datalist[index] = this.addData
    localStorage.setItem("AddData", JSON.stringify(this.Datalist));
    this.parentRouter.navigate(['/list/']);
  }
}
