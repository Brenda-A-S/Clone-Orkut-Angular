import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orkut-side-profile',
  templateUrl: './orkut-side-profile.component.html',
  styleUrls: ['./orkut-side-profile.component.css']
})
export class OrkutSideProfileComponent implements OnInit {

  @Input()
  name:string="" 
  @Input()
  photo:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
