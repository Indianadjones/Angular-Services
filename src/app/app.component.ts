import { Component, OnInit } from '@angular/core';
import { StudentService } from './Services/student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  students:any[]=[];//local array of students
  weather:any[]=[];//local variable of weather

  ngOnInit(): void{//component of cycle hook
    //call a student services
    //get that data and display it
    this.service.getStudentData().subscribe((data)=>{
      this.students = data.students;
    });// geting this ,ethod asynchronsly we have to subscribe it (()=>{}) - called a call back fucntion
    
    this.service.getWeatherData().subscribe((data)=>{
      this.weather = data.weather;
    });

  

  }

  constructor(private service:StudentService){}

 






}
