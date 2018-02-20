import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whistle-challenge',
  templateUrl: './whistle-challenge.component.html',
  styleUrls: ['./whistle-challenge.component.css']
})
export class WhistleChallengeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerWhistleChallenge(){
    let userData = JSON.parse(sessionStorage.getItem('user'));
    userData.whistleChallenge = 'active';
    let userStr = JSON.stringify(userData);
    sessionStorage.user = userStr;
  }

  cancelWhistleChallenge(){
    let userData = JSON.parse(sessionStorage.getItem('user'));
    userData.whistleChallenge = 'cancelled';
    let userStr = JSON.stringify(userData);
    sessionStorage.user = userStr;
  }
}
