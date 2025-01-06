import { Component } from '@angular/core';
import { AppServiceService } from '../../../../app-service.service';
import { CommonModule } from '@angular/common';
import { Task } from '../../../Task.model';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CheckboxComponent } from '../../../ui/checkbox/checkbox.component';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [CommonModule,
    CheckboxComponent
  ],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})
export class AllTasksComponent {

appservice: AppServiceService;
taskList: Array<Task> = [];
router: Router;

constructor(appService: AppServiceService, router: Router){
  this.appservice = appService;
  this.router = router;
}

  ngOnInit()
  {
    console.log("tasks ", this.appservice.getTaskList().length)
    this.taskList = JSON.parse(JSON.stringify(this.appservice.getTaskList()))
    console.log("tasks ", this.taskList)
  }

  onTaskSelected(task: Task)
  {
    this.router.navigateByUrl('tasks/'+(task._id))
  }
}
