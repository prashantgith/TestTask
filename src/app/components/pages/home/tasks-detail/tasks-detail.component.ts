import { Component } from '@angular/core';
import { AppServiceService } from '../../../../app-service.service';
import { Task } from '../../../Task.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tasks-detail',
  standalone: true,
  imports: [],
  templateUrl: './tasks-detail.component.html',
  styleUrl: './tasks-detail.component.css'
})
export class TasksDetailComponent {

  appService: AppServiceService;
  task: any;
  route: any;

  constructor(appService: AppServiceService, route: ActivatedRoute)
  {
    this.appService = appService;
    this.route = route;
  }

  ngOnInit()
  {

    // this.route.params.subscribe((param: Params) => { 
    //   console.log("subs ",param['taskId']);
    // })

    console.log('task ', this.route.snapshot.paramMap.get('taskId'))
    this.task = JSON.parse(JSON.stringify(
      this.appService.getTaskById(this.route.snapshot.paramMap.get('taskId'))))
    console.log(this.task);
  }

}
