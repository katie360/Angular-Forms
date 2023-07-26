import { Component, OnInit } from '@angular/core';
import { EmpListComponent } from '../emp-list/emp-list.component';
import { ActivatedRoute ,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-emp-content',
  template: `
    <p>
     The employee you have selected is of id ={{employeeId}}
     <br>
     <li class="btn">
     <a (click)="goPrevious()" >Previous</a>
     </li>
     <li  class="btn">
     <a (click)="goNext()" >Next</a>

     </li>
     <button class="btn" (click)="goToList()">
      Back
     </button>
    </p>
  `,
  styles: [
  ]
})
export class EmpContentComponent implements OnInit {

  public employeeId: number | null = null;

  constructor(private route: ActivatedRoute ,private _router :Router){

  }

  ngOnInit(): void {
    // const idString = this.route.snapshot.paramMap.get('id');
    // const id: number = parseInt(idString ?? '', 10);

    // if (!isNaN(id)) {
    //   this.employeeId = id;
    //   console.log(id);
    // }
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get("id");
      if (id !== null){
        this.employeeId = parseInt(id)
      }
      else{
        this.employeeId = null;
      }

    }
    );

  }
  goPrevious(){
    if(this.employeeId !== null && this.employeeId > 1){
      let previousId = this.employeeId - 1;
      this._router.navigate(["/details",previousId]);
    }
  }
  goNext(){
    if(this.employeeId !== null){
    let nextId = this.employeeId + 1;
    this._router.navigate(["/details",nextId]);
    }
  }

    goToList(){
      let selectedId = this.employeeId? this.employeeId :null;
      this._router.navigate(["/list",{id : selectedId}]);
    }
}


