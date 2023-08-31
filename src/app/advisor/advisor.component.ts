import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.css']
})
export class AdvisorComponent implements OnInit {

  advisorInfo:any  = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    console.log("form data", this.advisorInfo);
    if (form.invalid) {
      return;
    }
    let url = "localhost:5000/api/student";
    const payload = this.advisorInfo;
    this.http.post(url,payload).subscribe(res => {
      window.alert("instructor details saved successfully");
      this.advisorInfo = {};
    })
  }

}
