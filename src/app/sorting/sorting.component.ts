import { Component, OnInit } from '@angular/core';
import{SortserviceService} from '../sortservice.service';
 import{OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']

})

export class SortingComponent implements OnInit {
  reverse:boolean=false;
  order:string='id';
   sorting;
 sortedCollection:any[];
  constructor(private ss:SortserviceService,private orderPipe:OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.sorting, 'id');
    console.log(this.sortedCollection);
   }
   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  
    this.order = value;
  }

  ngOnInit() {
 this.ss.display().subscribe(data=>this.sorting=data);
 
}

}

// note: without using interface we can run the code here.
