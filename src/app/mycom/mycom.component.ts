import { Component, OnInit } from '@angular/core';
import { UserData } from '../shared/userData.service';
import { DepartmentData } from '../shared/departmentData.service';

@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrls: ['./mycom.component.css']
})
export class MycomComponent implements OnInit {
  userData;
  departmentData;
  myFavorite = true;
  constructor(private ud:UserData,private deptData:DepartmentData) {
    this.userData = ud.loadUsers();
    this.departmentData = deptData.loadDepartment();
   }
   employeeData = {
     name:"Meet Shah",
     salary:10000000,
     rating:9.9999,
     doj : new Date(7/11/2020)
   }
 
  ngOnInit() {
  }

}
