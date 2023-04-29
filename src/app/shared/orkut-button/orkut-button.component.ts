import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orkut-button',
  templateUrl: './orkut-button.component.html',
  styleUrls: ['./orkut-button.component.css']
})
export class OrkutButtonComponent implements OnInit {

  @Input()
  text:string=""
  @Input()
  href:string=""
  @Input()
  theme:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
