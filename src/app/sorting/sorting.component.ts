import { Component, OnInit } from '@angular/core';
import{SortserviceService} from '../sortservice.service';
 

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']

})

export class SortingComponent implements OnInit {
 sorting;

  constructor(private ss:SortserviceService) { }

  ngOnInit() {
 this.ss.display().subscribe(data=>this.sorting=data);
}}

// note: without using interface we can run the code here.
