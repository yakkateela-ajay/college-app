import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsFormComponent } from './student-details-form/student-details-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { InstructorComponent } from './instructor/instructor.component';
import { AdvisorComponent } from './advisor/advisor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/student-form',
    pathMatch: 'full'
  },
  { path: "student-form", component: StudentDetailsFormComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "department", component: DepartmentsComponent },
  { path: "instructor", component: InstructorComponent },
  { path: "advisor", component: AdvisorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
