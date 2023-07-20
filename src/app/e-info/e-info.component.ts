
import { Component,OnInit } from '@angular/core';
import { DataService,Product } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],


})
export class EInfoComponent implements OnInit {

  constructor( private dataService:DataService ){
  }
  products:Product[]=[];

  ngOnInit(): void {
   this.dataService.getProducts().subscribe((data) => {
    this.products = data;
  })
  }


  }

