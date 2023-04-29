import { Component, ElementRef, OnInit } from '@angular/core';
import profile from '../../../assets/data/profile.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string = ""

  profile: any = profile;
  friends: any = profile.friends;
  comunities: any = profile.comunities;

  constructor(private element:ElementRef) { 
    this.name = profile.name;
  }

  ngOnInit(): void {  
    
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.ownerDocument.body.style.backgroundColor = '#d9e6f7';
}
}
