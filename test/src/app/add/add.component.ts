import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // registerForm: FormGroup;
  // submitted = false;
  constructor(private formBuilder: FormBuilder, private parentRouter: Router) { }
  addData: any = {};
  ngOnInit(): void {
    // console.log((((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1));
  }

  available: string;
  dataarray = [];
  data = [];
  fileToUploadlogo: File = null;
  image = '';
  fileChange(files: FileList) {
    this.fileToUploadlogo = files.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event: any) => {
      this.image = event.target.result;
    }
  }
  productname: string = "";
  description: string = "";
  price: string = "";
  discount: string = "";
  onSubmit() {
    this.productname = "";
    this.description = "";
    this.image = "";
    this.price = "";
    this.discount = "";
    this.available = "";
    if (!this.addData.productname) {
      this.productname += "Productname is required";
    }
    if (!this.addData.description) {
      this.description += "Description is required";
    }
    if (!this.addData.price) {
      this.price += "Price is required";
    }
  //   if (!this.regData.email) {
  //   this.email += Constants.email;
  // }
  // else {
  //   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.regData.email)) {
  //     this.email = Constants.validemail;
  //   }
  // }
    if (!this.addData.discount) {
      this.discount += "Discount is required";
    }
    if (this.productname == "" && this.description == "" && this.price == "" && this.discount == "") {
      var typeofrun_obj: any = {};
      typeofrun_obj.id = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      typeofrun_obj.productname = this.addData.productname;
      typeofrun_obj.description = this.addData.description;
      typeofrun_obj.image = this.image;
      typeofrun_obj.price = this.addData.price;
      typeofrun_obj.discount = this.addData.discount;
      typeofrun_obj.available = this.available;
      this.data.push(typeofrun_obj);
      console.log("data", this.data);
      localStorage.setItem("AddData", JSON.stringify(this.data));
    }
  }
  clean() {
    this.addData = '';
    this.available = '';
  }

}
