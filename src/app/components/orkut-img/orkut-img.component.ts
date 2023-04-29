import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orkut-img',
  templateUrl: './orkut-img.component.html',
  styleUrls: ['./orkut-img.component.css']
})
export class OrkutImgComponent implements OnInit {

  @Input()
  photoType: string = ""
  @Input()
  name: string = ""
  @Input()
  photo: string = ""


  constructor() {
  }

  ngOnInit(): void {
  }



}
