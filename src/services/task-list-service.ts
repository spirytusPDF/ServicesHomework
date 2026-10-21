import { Service, signal, WritableSignal } from '@angular/core';
import { Task } from '../models/Task';

@Service()
export class TaskListService 
{
    tasks: WritableSignal<Task[]> = signal<Task[]>([
    { Id: 1, Title: "Do Angular homework", Description: "Four tasks", IsFinished: false },
    { Id: 2, Title: "Make algebra conspect", Description: "Two lessons", IsFinished: false },
    { Id: 3, Title: "Prepare for a contest", Description: "Refresh algorythm knowledge", IsFinished: false }
  ]);

    public getTasks(){
        return this.tasks;
    }
    public addTask(title:string, desc:string){
        const currentTasks = this.tasks();
        let newId = Math.max(...currentTasks.map(t => t.Id))+1;
        this.tasks.update(tasks=>[...tasks, {Id:newId, Title:title, Description:desc, IsFinished:false}]);
    }
    public changeTask(id:number, title:string, desc:string){
        this.tasks.update(
            tasks=>tasks.map(t=>t.Id == id ? {...t, Title:title, Description:desc}:t));
    }
    public deleteTask(id:number){
       this.tasks.update(tasks=>
        tasks.filter(t=>t.Id != id));
    }
    public toggleCompletion(id:number){
       this.tasks.update(tasks=>
        tasks.map(task=>
            task.Id === id ? {...task, IsFinished: !task.IsFinished}:task));
        
    }

    public getFiltered(completed:boolean){
        return this.tasks().filter(t=>t.IsFinished === completed);
    }
    
}
