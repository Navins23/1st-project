import { Injectable } from '@angular/core';

interface Idetails{
  name:string,class:number,roll:number,address:string  
}
@Injectable({
  providedIn: 'root'
})
export class SortserviceService {

  constructor() { }
  details:Idetails[]=[{'name':"navin",'class':8,'roll':5,'address':"kailali"},
 {'name':"navin",'class':12,'roll':5,'address':"kailali"},
 {'name':"navin",'class':18,'roll':5,'address':"kailali"}
]
display(){
  return this.details;
}
}