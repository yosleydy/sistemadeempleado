import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './components/employee/list-employees/list-employees.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ListEmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'frontend';
}
