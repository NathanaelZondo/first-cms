import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  employees =[];

  sho: any = {};
  addemp()
  {
  this.employees.push(this.sho);
  this.sho = {}; 
  }

  delete(index)
  {
   this.employees.splice(index, 1);
 
  }

  constructor() { }

  ngOnInit() {
  }

}
