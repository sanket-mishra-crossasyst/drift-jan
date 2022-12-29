import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.scss']
})
export class MailAppComponent implements OnInit {
  showAll= true;
  showNone= true;
 
  constructor() { }

  ngOnInit(): void {
  }

}
