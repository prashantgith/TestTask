import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AllTasksComponent } from './components/pages/home/all-tasks/all-tasks.component';
import { TasksDetailComponent } from './components/pages/home/tasks-detail/tasks-detail.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent, 
  //   children: [
  //     { path: 'alltasks', component: AllTasksComponent }
  //   ] 
  // }
  { path: '', component: HomeComponent},
  { path: 'tasks', component: AllTasksComponent},
  { path: 'tasks/:taskId', component: TasksDetailComponent},
];
