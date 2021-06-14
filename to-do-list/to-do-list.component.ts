import { Component, OnInit } from '@angular/core';


interface task{
  taskName:string,
  priority:number,
  status:string
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myTaskList:task[]=[];
userinput = {} as task;

addOrUpdate(name:string,priority:string){
  let isFound:boolean = false;
    
    for(let i = 0;i<this.myTaskList.length;i++)
    {
      if(this.myTaskList[i].taskName == name)
      {
        isFound = true;
        this.myTaskList[i].priority = parseInt(priority);
        break;
      }
    }

    if(!isFound)
    {
      let pri:number = parseInt(priority);
      let tempTask:task={
        taskName:name,
        priority:pri,
        status:"pending"
      };
      this.myTaskList.push(tempTask);
    }

  }
pushElement(tasks:task){
  this.myTaskList.push(tasks);
  console.log("Pushed", this.myTaskList.length);
}

getAllTasks():task[]{
  return this.myTaskList;
}

  doChangeStatus(status:string, name:string){
   this.myTaskList.forEach(task=>{
     if(task.taskName.localeCompare(name)==0){
       task.status=status;
     }
   })
  }
}
