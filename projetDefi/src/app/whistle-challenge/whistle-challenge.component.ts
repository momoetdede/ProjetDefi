import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-whistle-challenge',
  templateUrl: './whistle-challenge.component.html',
  styleUrls: ['./whistle-challenge.component.css']
})
export class WhistleChallengeComponent implements OnInit {

  whistleDay;
  user: UserService;
  constructor(user:UserService) { 
    this.user = user;
    if(user.getCurrentChallengeName()!="Whistle challenge"){
      this.whistleDay = null;
    }
    else{
      this.whistleDay = user.getCurrentChallengeDay();
    }
  }

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
      userData['activeChallenges'].push({"challengeName":"Whistle challenge","challengeStatus":"active","challengeDay":1});
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

  nextWhistleDay(){
    this.user.nextDay();
    location.reload();
  }

  previousWhistleDay(){
    this.user.previousDay();
    location.reload();
  }
}
