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
    userData.currentChallenge = 'Whistle challenge';
    if(userData.activeChallenges==null){
      userData.activeChallenges = [];
    }
    if (!userData.activeChallenges.some(item => item.challengeName === "Whistle challenge")){
      console.log("add whistle challenge")
      userData['activeChallenges'].push({"challengeName":"Whistle challenge","challengeStatus":"active","challengeDay":"1"});
      location.reload();
    } else {
      alert("Challenge already saved.");
    }
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
