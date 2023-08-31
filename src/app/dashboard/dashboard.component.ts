import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: any = ["id","name","email"];
  dataSource:any = [{id: 1, name: "Ajay",email: "email@gmail.com"}];
  constructor() { }

  ngOnInit(): void {
  }

}
