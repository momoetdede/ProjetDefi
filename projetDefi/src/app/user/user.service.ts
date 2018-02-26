import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  userData;

  constructor() { 
    if(sessionStorage.getItem('user')==null){
      this.userData = JSON.parse("{\"connected\":false}")
    }
    else {
      this.userData = JSON.parse(sessionStorage.getItem('user'));
    }
  }

  getCurrentChallengeName(){
    if(this.userData.currentChallenge==null){
      return 0;
    }
    return this.userData.currentChallenge;
  }

  getCurrentChallengeDay(){
    let currentChallenge = this.userData.currentChallenge;
    if(currentChallenge != null){
      for (var i = 0; i < this.userData.activeChallenges.length; i++){
        if (this.userData.activeChallenges[i].challengeName == currentChallenge){
            return this.userData.activeChallenges[i].challengeDay;
        }
      }
    }
    else{
      return 0;
    }
  }

  nextDay(){
    if (this.getCurrentChallengeName()!=""){
      for (var i = 0; i < this.userData.activeChallenges.length; i++){
        if (this.userData.activeChallenges[i].challengeName == this.getCurrentChallengeName()){
          this.userData.activeChallenges[i].challengeDay = this.getCurrentChallengeDay() + 1;
          let userStr = JSON.stringify(this.userData);
          sessionStorage.user = userStr;
        }
      }
    }
  }

  previousDay(){
    if (this.getCurrentChallengeName()!=""){
      for (var i = 0; i < this.userData.activeChallenges.length; i++){
        if (this.userData.activeChallenges[i].challengeName == this.getCurrentChallengeName()){
          this.userData.activeChallenges[i].challengeDay = this.getCurrentChallengeDay() - 1;
          let userStr = JSON.stringify(this.userData);
          sessionStorage.user = userStr;
        }
      }
    }
  }

  setCurrentChallengeDay(value){
    if (this.getCurrentChallengeName()!=""){
      for (var i = 0; i < this.userData.activeChallenges.length; i++){
        if (this.userData.activeChallenges[i].challengeName == this.getCurrentChallengeName()){
          this.userData.activeChallenges[i].challengeDay = value;
          let userStr = JSON.stringify(this.userData);
          sessionStorage.user = userStr;
        }
      }
    }
  }

}
