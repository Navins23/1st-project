import { Component, OnInit } from '@angular/core';

interface Idetails{
  name:string,class:number,roll:number,address:string  
}
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']

})

export class SortingComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
  }
 details:Idetails[]=[{'name':"navin",'class':8,'roll':5,'address':"kailali"},
 {'name':"navin",'class':12,'roll':5,'address':"kailali"},
 {'name':"navin",'class':8,'roll':5,'address':"kailali"}
]

}

// note: without using interface we can run the code here.
