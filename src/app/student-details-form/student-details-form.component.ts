import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-details-form',
  templateUrl: './student-details-form.component.html',
  styleUrls: ['./student-details-form.component.css']
})
export class StudentDetailsFormComponent implements OnInit {

  studentDetails: any = {};
  listOfYears:any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    console.log("form data", this.studentDetails);
    if (form.invalid) {
      return;
    }
    let url = "localhost:5000/api/student";
    const payload = {
      StudentName: this.studentDetails.fullName,
      Email: this.studentDetails.email,
      Fellowship: this.studentDetails.fellowship,
      Program: this.studentDetails.programType,
      Yearofstudy: this.studentDetails.yearOfStudy
    }
    this.http.post(url,payload).subscribe(res => {
      window.alert("Student details saved successfully");
      this.studentDetails = {};
    })
  }

  programTypeChange(){
    this.studentDetails.yearOfStudy = null;
    if(this.studentDetails.programType === "B Tech"){
      this.listOfYears = ["1st year", "2nd year", "3rd year", "4rth year"];
    }else{
      this.listOfYears = ["1st year", "2nd year"];
    }
  }

}
