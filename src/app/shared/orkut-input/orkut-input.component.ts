import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orkut-input',
  templateUrl: './orkut-input.component.html',
  styleUrls: ['./orkut-input.component.css']
})
export class OrkutInputComponent implements OnInit {

  @Input()
  type:string = ""
  @Input()
  name:string = ""
  @Input()
  placeholder:string = ""
  @Input()
  id:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
