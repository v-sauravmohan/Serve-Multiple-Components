import { Component, OnInit } from '@angular/core';
import { CombineService } from '../combine.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  FirstName: string;
  constructor(private combine: CombineService) {
    this.FirstName = 'firstname';
    combine.FirstName.next(this.FirstName);
   }

  ngOnInit() {
  }

  onEnter(value: string) {
    this.FirstName = value;
    this.combine.FirstName.next(this.FirstName);
  }
}
