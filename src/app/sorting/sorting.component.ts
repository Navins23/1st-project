import { Component, OnInit } from '@angular/core';
import { SortserviceService } from '../sortservice.service';
 

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']

})

export class SortingComponent implements OnInit {
 
text;
  constructor(private ss:SortserviceService) { }

  ngOnInit() {
this.text=this.ss.display()
}
}

// note: without using interface we can run the code here.
