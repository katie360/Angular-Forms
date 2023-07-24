import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit{

  public employees:Employee[]=[];
  public errorMsg:any;
  constructor(private dService:DataService){

    }
    ngOnInit(): void {
      this.dService.getEmployees()
       .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);

 }
}


