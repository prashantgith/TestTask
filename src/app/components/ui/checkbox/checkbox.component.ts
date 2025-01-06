import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Task } from '../../Task.model';
import { AppServiceService } from '../../../app-service.service';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {

  @Input() task: Task | any;
  appService: AppServiceService;
  checked: boolean = false;

  constructor(appService: AppServiceService){
    this.appService = appService;
  }

  ngOnInit(): void {
   console.log('inint ', <Task>this.task);
   this.checked = this.task._done 
  }

  onChange = (value: boolean) => { 
    console.log('onChange',value)
    this.appService.updateTask(this.task._id,value);  
  };
  
  onTouched = () => { 
    console.log('onTouched')
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(checked: boolean) {
    this.checked = checked;
  }

  onModelChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
  }
}