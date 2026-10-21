import { Component, computed, inject, signal } from '@angular/core';
import { TaskListService } from '../../services/task-list-service';
import { TaskItem } from '../task-item/task-item';

@Component({
  imports: [TaskItem],
  selector: 'app-display-tasks',
  styleUrl: './display-tasks.css',
  templateUrl: './display-tasks.html',
})
export class DisplayTasks {
  newTaskTitle = '';
  newTaskDesc = '';
  taskService = inject(TaskListService);
  filter = signal<'all' | 'completed' | 'incompleted'>('all');
  displayedTasks = computed(() => {
    const tasks = this.taskService.getTasks()();
    const currentFilter = this.filter();

    if (currentFilter === 'completed') {
      return tasks.filter(t => t.IsFinished);
    }
    if (currentFilter === 'incompleted') {
      return tasks.filter(t => !t.IsFinished);
    }
    return tasks;
  });

  setFilter(status: 'all' | 'completed' | 'incompleted'): void {
    this.filter.set(status);
  }
}
