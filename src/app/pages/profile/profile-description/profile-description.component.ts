import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.css']
})
export class ProfileDescriptionComponent implements OnInit {

  @Input()
  name:string =""
  @Input()
  phrase:string =""

  //profile-info inputs
  @Input()
  relationship:string = ""
  @Input()
  who_am_I:string = ""
  @Input()
  local:string = ""
  @Input()
  occupation:string = ""  
  @Input()
  interests:string = ""
  @Input()
  musics:string = ""
  @Input()
  films:string = ""
  @Input()
  books:string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
