import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SortserviceService {


 url="https://jsonplaceholder.typicode.com/users";
 
  constructor(private http:HttpClient) { 
    
  }
  
display(){
  return this.http.get(this.url);

}

}