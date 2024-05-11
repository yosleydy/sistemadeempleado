import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee.model';
@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
  employees: Employee[] = [];
  id:number

  constructor(private employeeService: EmployeeService) {}
 
  ngOnInit(): void {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees
    });
  }

  delete(id:number) {
    this.employeeService.delete(id).subscribe(res => {
      this.employees = this.employees.filter(item => item.id !== id);
      console.log('Person deleted successfully!');
 })
  }

}
