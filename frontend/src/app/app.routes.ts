import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/employee/list-employees/list-employees.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: ListEmployeesComponent },
    { path: 'employeeCreate', component: CreateEmployeeComponent },
    { path: 'employees/:id', component:  EditEmployeeComponent},

];
