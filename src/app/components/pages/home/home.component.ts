import { Component } from '@angular/core';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NewTaskFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
