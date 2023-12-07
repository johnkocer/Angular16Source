import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmloyeeService {
  public employeeList: Employee[] = [];

  ngOnInit(){
    this.employeeList = [
      { "id": 1, "name": "Roger Smith"},
      { "id": 2, "name": "Alex Bob"},
      { "id": 3, "name": "Stephen Ken"},
      ];
  }

  getEmployeeList()  {
    if (this.employeeList.length == 0 )
        this.ngOnInit();
    return this.employeeList;
  }

  initializeData(){
    this.getEmployeeList();
  }

  getEmployee(id : number){
    return this.employeeList.find(e=>e.id == id);
  }

  addEmployeeInfo(emloyee : Employee){
    this.employeeList.push(emloyee);
  }
}