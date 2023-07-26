import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from 'src/assets/emp-data/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public employees:Employee[]=[];
  public errorMsg :any ;
  constructor(private dService:DataService , private _router:Router){
}

  ngOnInit(): void {
     this.dService.getEmployees()
      .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);

}
onSelect(employee:Employee){
 this._router.navigate(["/details",employee.id]);
}
}
