import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentInfo: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    console.log("form data", this.departmentInfo);
    if (form.invalid) {
      return;
    }
    let url = "localhost:5000/api/student";
    const payload = this.departmentInfo;
    this.http.post(url,payload).subscribe(res => {
      window.alert("Department details saved successfully");
      this.departmentInfo = {};
    })
  }


}
