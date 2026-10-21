import { Component, inject, Input } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskListService } from '../../services/task-list-service';

@Component({
  imports: [],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
  @Input({ required: true }) task!: Task;
  taskService = inject(TaskListService);
  isEditing = false;
  editedTitle = '';
  editedDesc = '';
  
  saveEdit(): void {
    const taskId = typeof this.task === 'function' ? (this.task as any)().Id : this.task.Id;
    
    if (this.editedTitle.trim()) {
      this.taskService.changeTask(taskId, this.editedTitle, this.editedDesc);
      this.isEditing = false; 
    }
  }
  
}
