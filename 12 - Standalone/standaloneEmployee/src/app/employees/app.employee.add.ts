import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Employee } from './employee';
import { EmloyeeService } from './app.employee.service';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.employee.add.html'
})
export class EmployeeAddComponent implements OnInit {
  public employeeList : Employee[] = [] ;
  public employee : any = {};

    constructor(
    private _employeeService : EmloyeeService, 
    private _route: Router) {
  }

  ngOnInit(){
    this.employeeList = this._employeeService.getEmployeeList();
  }

  addRecord(){
    var lastNo = this.employeeList[this.employeeList.length-1].id;
    if (lastNo == null)
      lastNo = 0;
    this.employee.emp_id = lastNo +1;
    this._employeeService.addEmployeeInfo(this.employee);
    this.navigateUrl();
  }

  navigateUrl(){
    this._route.navigate(['home']);
  }
}