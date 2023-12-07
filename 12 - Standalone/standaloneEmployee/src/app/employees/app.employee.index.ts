import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Employee } from './employee';
import { EmloyeeService } from './app.employee.service';

@Component({
  selector: 'app-employee-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.employee.index.html'
})
export class EmployeeIndexComponent implements OnInit {
  public employeeList : Employee[] = [] ;

  constructor(
    private _employeeService : EmloyeeService, 
    private _route: Router) {

  }

  ngOnInit(){
    this.employeeList = this._employeeService.getEmployeeList();
  }

  navigateUrl(path:string, id:number){
    this._route.navigate([path, id]);
  }
}