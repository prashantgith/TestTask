import { Injectable } from '@angular/core';
import { Task } from './components/Task.model';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private taskList: Array<Task> = new Array();
  private uniqueId = 0;

  constructor() { 

  }

  increamentId()
  {
    return ++this.uniqueId;
  }

  addTask(newTask: Task)
  {
    newTask._id = this.increamentId();
    this.taskList.push(newTask);
  }

  getTaskList()
  {
    return this.taskList;
  }

  getTaskById(id: number)
  {
    return this.taskList.find(task => task._id == id);
  }

  updateTask(id:number, isDone: boolean)
  {
    let task = this.taskList.find(task => task._id == id);
    if(task)
      task._done = isDone;
  }
}
