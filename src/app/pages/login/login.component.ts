import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private elemento:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.elemento.nativeElement.ownerDocument.body.style.backgroundColor = '#ffeff6';
}
}
