import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  instructorInfo:any = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    console.log("form data", this.instructorInfo);
    if (form.invalid) {
      return;
    }
    let url = "localhost:5000/api/student";
    const payload = this.instructorInfo;
    this.http.post(url,payload).subscribe(res => {
      window.alert("instructor details saved successfully");
      this.instructorInfo = {};
    })
  }
}
