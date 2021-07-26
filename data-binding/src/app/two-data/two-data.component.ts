import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-data',
  templateUrl: './two-data.component.html',
  styleUrls: ['./two-data.component.scss']
})
export class TwoDataComponent implements OnInit {

  nome:string = "abc"
  
  constructor() { }

  ngOnInit(): void {
  }

}
