import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';


interface Idetails{
  name:string,class:number,roll:number,address:string  
}
@Injectable({
  providedIn: 'root'
})
export class SortserviceService {
 url="https://jsonplaceholder.typicode.com/photos"
  constructor(private http:HttpClient) { }
  
display(){
  return this.http.get(this.url);

}}