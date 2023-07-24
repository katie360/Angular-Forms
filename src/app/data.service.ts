import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse } from  '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url: string = "http://localhost:4200/assets/emp-data/emp-data.json";
  constructor( private http :HttpClient){

  }
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler( error : HttpErrorResponse){
    return throwError(error.message || "server error");

  }


}

