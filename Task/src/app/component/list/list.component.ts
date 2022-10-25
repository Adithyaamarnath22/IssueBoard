import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { CrudService } from 'src/app/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
   
export class ListComponent implements OnInit {

  adddetails={task_name:""}
 
   taskObj : Task = new Task();
   taskArr : Task[] = [];
   tasks:any=[]
   addTaskValue : string = '';
   editTaskValue : string = '';
 
   constructor(private crudService:CrudService ) { }
   ngOnInit(): void 
    {
     this.taskArr = [];
     this.editTaskValue = '';
     this.addTaskValue = '';
     this.taskObj = new Task();
     this.getAllTask(); 
     // this.addTask();
    }
   
   
   
   
   getAllTask() {
     this.crudService.GetAll().subscribe(
       (       res: any) => {
         console.log(res);
        this.tasks= res;
     }, 
       (     err: any) => {
       alert("Unable to get list of tasks");
     });
   }
    task:any=""
   addTask() {
     // this.crudService.AddTask(this.adddetails).subscribe(
     //   res=>console.log(res)
     // )
     this.taskObj.task_name = this.addTaskValue;
     this.crudService.AddTask(this.adddetails).subscribe( (res: any) => {
       this.ngOnInit();
       console.log(res);
     this.addTaskValue = '';
     },
       (      err: any) => {
       alert(err);
     })
   }
   
   editTask() {
     this.taskObj.task_name= this.editTaskValue;
     this.crudService.EditTask(this.taskObj).subscribe( (res: any) => {
       this.ngOnInit();
     }, (err: any)=> {
       alert("Failed to update task");
     })
   }
   
   deleteTask(etask:number) {
     
     this.crudService.DeleteTask(etask).subscribe((res: any)=>{
        this.ngOnInit();
     },(err: any)=>{
       alert("Failed to delete task ");
     });
   }
    
   call(etask : Task) {
     this.taskObj=etask;
     this.editTaskValue = etask.task_name;
   }
    
 }
 