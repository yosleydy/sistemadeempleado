import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import {FormGroup,ReactiveFormsModule,Validators,FormBuilder,AbstractControl} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule, getLocaleDateTimeFormat } from '@angular/common';
import { Country } from '../../../models/country.model';
import { Area } from '../../../models/area.model';
import { State } from '../../../models/state.model';
import { TypeIdentification } from '../../../models/type-identification.model';
import { Router } from '@angular/router';
import localeEn from "@angular/common/locales/en";

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})

export class CreateEmployeeComponent implements OnInit {
  countries: Country[] = [];
  areas: Area[] = [];
  states: State[] = [];
  typeID: TypeIdentification[] = [];

  employeeForm: FormGroup;
  submitted = false;
  date = new Date()



  constructor(private employeeService: EmployeeService, public formBuilder: FormBuilder,private router: Router) {
    this.employeeForm = this.formBuilder.group({
      pLastName: ['',Validators.required],
      sLastName: ['',Validators.required],
      pName: ['',Validators.required],
      otherNames:[''],
      country: ['',Validators.required],
      typeID: ['',Validators.required],
      nId: ['',Validators.required],
      email: ['',Validators.required],
      dateI: [''],
      area: ['',Validators.required],
      state: ['Activo',Validators.required],
      dateR: [this.date.toLocaleString()],
    })
  }


   ngOnInit() {
    this.loadDataCountries(),
    this.loadDataAreas(),
    this.loadDataStates(),
    this.loadDataTypeIdentification()
  }


  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  onSubmit() {
    const data = this.employeeForm.value
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }else{
      this.employeeService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('employees');
      },
      error: (e) => console.log(e)
    });
    }
  }


  private loadDataCountries(): void {
    this.employeeService.getAllCountries().subscribe(countries => {
      this.countries = countries
    });
  }

  private loadDataAreas(): void {
    this.employeeService.getAllAreas().subscribe(areas => {
      this.areas = areas
    });
  }

  private loadDataStates(): void {
    this.employeeService.getAllState().subscribe(states => {
      this.states = states
    });
  }

  private loadDataTypeIdentification(): void {
    this.employeeService.getAllTypeIdentification().subscribe(typeID => {
      this.typeID = typeID
    });
  }

}
