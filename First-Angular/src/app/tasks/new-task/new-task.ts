import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskType } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancelTask = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<NewTaskType>();
  //we can use signal or two way binding , both will work with NgModel, no change needed in html , both will have same [(ngModel)]="enteredTitle"
  //In two way binding we can read as well as write values
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelAdd() {
    this.cancelTask.emit(false);
  }

  onSubmit() {
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    });

  }}
  