import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //getting access of a local instace of the client class
  constructor(private http:HttpClient) { }// argument to the constructor variable http from type httpclient

  getStudentData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/1080824492259033088');
  }


  getWeatherData():Observable<any>{//brings back the weather
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
  


}
