import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombineService {

  combineValue = new Subject<string>();
  FirstName = new Subject<string>();
  LastName = new Subject<string>();
  firstName: string;
  lastName: string;
  fullname: string;

  constructor() { }

  Combine() {
    combineLatest(this.FirstName, this.LastName).subscribe(
      ([fVal, LVal]) => {
        console.log(fVal);
        console.log(LVal);
        this.fullname = fVal+LVal;
        this.combineValue.next(this.fullname);
      }
    );
  }

}
