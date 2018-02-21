import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  userData;

  constructor() { 
    this.userData = JSON.parse(sessionStorage.getItem('user'));
  }

  getCurrentChallengeName(){
    return this.userData.currentChallenge;
  }

  getCurrentChallengeDay(){
    let currentChallenge = this.userData.currentChallenge;
    for (var i = 0; i < this.userData.activeChallenges.length; i++){
      if (this.userData.activeChallenges[i].challengeName == currentChallenge){
         return this.userData.activeChallenges[i].challengeDay;
      }
    }
  }
}
