import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "assets/products.json";
  constructor( private http:HttpClient ){

  }
  getProducts():Observable<Product[]>{
    return this.http.get<any>(this.apiUrl); //returning
  }

}

export interface Product{
  id : number;
  name : string ;
  price :number ;
  description?:string ;
  image :string;
}
