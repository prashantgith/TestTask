import { Component } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { CheckboxComponent } from '../../../ui/checkbox/checkbox.component';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppServiceService } from '../../../../app-service.service';
import { Task } from '../../../Task.model';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})
export class NewTaskFormComponent {
  
  appService: AppServiceService;
  router: Router;

  constructor(appService: AppServiceService, router: Router){
    this.appService = appService;
    this.router = router;
  }

  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)])
    // add controls
  });

  onSubmit()
  {
    if(!this.form.valid)
      alert("Task should be at least 4 characters long.") 
    else
    {
      console.log("onSubmit", this.form.valid, " ", this.form.controls.name.value)
      let s = this.form.controls.name.value !== null ? this.form.controls.name.value : '';
      this.appService.addTask(new Task(s))
      this.form.controls.name.reset('');
    }
  }

  loadTasks()
  {
    if(this.appService.getTaskList().length > 0)
      this.router.navigateByUrl('/tasks')
    else
      alert('No task available!')
  }
}
