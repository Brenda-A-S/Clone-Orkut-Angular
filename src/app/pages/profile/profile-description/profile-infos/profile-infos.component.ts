import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.component.html',
  styleUrls: ['./profile-infos.component.css']
})
export class ProfileInfosComponent implements OnInit {

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
