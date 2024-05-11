import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule,AbstractControl } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  employeeFormEdit = new FormGroup({
    lastname:  new FormControl(''),
    s_lastname:  new FormControl(''),
    name:  new FormControl(''),
    o_name:  new FormControl(''),
    nId:  new FormControl(''),
    email:  new FormControl(''),
  });

  constructor( 
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.employeeService.get(this.id).subscribe((data: Employee)=>{
        this.employee = data;
        this.employeeFormEdit.patchValue({
          lastname: this.employee.lastname,
          s_lastname:  this.employee.s_lastname,
          name:  this.employee.name,
          o_name:  this.employee.o_name,
          nId:  this.employee.n_identification,
          email: this.employee.email,
        });
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeFormEdit.controls;
  }

  onSubmit() {
    console.log(this.employeeFormEdit.value);
    this.employeeService.update(this.id, this.employeeFormEdit.value).subscribe(res => {
      console.log('updated successfully!');
      this.router.navigateByUrl('employees');
 })
  }

}
