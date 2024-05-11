import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule,AbstractControl } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { TypeIdentification } from '../../../models/type-identification.model';
@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  typeID: TypeIdentification[] = [];

  date = new Date()
  id: number;
  employee: Employee;
  employeeFormEdit = new FormGroup({
    lastname:  new FormControl(''),
    s_lastname:  new FormControl(''),
    name:  new FormControl(''),
    o_name:  new FormControl(''),
    nId:  new FormControl(''),
    email:  new FormControl(''),
    admision_at:  new FormControl(''),
    typeID:  new FormControl(''),
    country:  new FormControl(''),
    area:  new FormControl(''),
    state:  new FormControl(''),
    update_at:  new FormControl(this.date.toLocaleString()),
  });

  constructor( 
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadDataTypeIdentification()
    
      this.employeeService.get(this.id).subscribe((data: Employee)=>{
        this.employee = data;
        console.log(data)
        this.employeeFormEdit.patchValue({
          lastname: this.employee.lastname,
          s_lastname:  this.employee.s_lastname,
          name:  this.employee.name,
          o_name:  this.employee.o_name,
          nId:  this.employee.n_identification,
          email: this.employee.email,
          admision_at: this.employee.admision_at?.split(' ')[0],
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


  private loadDataTypeIdentification(): void {
    this.employeeService.getAllTypeIdentification().subscribe(typeID => {
      console.log(typeID)
    });
  }

}
