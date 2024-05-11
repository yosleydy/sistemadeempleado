import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Country } from '../models/country.model';

const baseUrl = 'http://127.0.0.1:8000/api/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(id: any): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByEmployee(title: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}?pNombre=${title}`);
  }

  getAllCountries(): Observable<Country[]>  {
    return this.http.get<Country[]> (`${baseUrl}/countries`);
  }

  getAllTypeIdentification(): Observable<any> {
    return this.http.get(`${baseUrl}/typeIdentification`);
  }

  getAllAreas(): Observable<any> {
    return this.http.get(`${baseUrl}/areas`);
  }

  getAllState(): Observable<any> {
    return this.http.get(`${baseUrl}/state`);
  }


}
