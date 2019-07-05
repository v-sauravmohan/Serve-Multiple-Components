import { Component, OnInit } from '@angular/core';
import { CombineService } from '../combine.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  LastName: string;
  output: string;
  constructor(private combine: CombineService) {
    this.LastName = 'Last Name';
    this.output = '';
    combine.LastName.next(this.LastName);
   }

  ngOnInit() {
    this.combine.Combine();
    this.combine.combineValue.subscribe((val) => { this.output = val; });
  }

  onEnter(value: string) {
    this.LastName = value;
    this.combine.LastName.next(this.LastName); }
}
