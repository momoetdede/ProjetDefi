import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit,AfterViewInit {

  oneStatus = "done";
  twoStatus = "done";
  threeStatus = "done";
  fourStatus = "done";
  fiveStatus = "done";
  sixStatus = "current";
  sevenStatus = "";
  eightStatus = " ";
  nineStatus = " ";
  tenStatus = " ";
  @ViewChild('one') one:ElementRef;
  @ViewChild('two') two:ElementRef;
  @ViewChild('three') three:ElementRef;
  @ViewChild('four') four:ElementRef;
  @ViewChild('five') five:ElementRef;
  @ViewChild('six') six:ElementRef;
  @ViewChild('seven') seven:ElementRef;
  @ViewChild('eight') eight:ElementRef;
  @ViewChild('nine') nine:ElementRef;
  @ViewChild('ten') ten:ElementRef;
  user: UserService;
  currentChallenge;
  challengeDay;

  constructor(user: UserService) { 
    this.user = user;
  }

  ngOnInit() {
    this.currentChallenge = this.user.getCurrentChallengeName();
    this.challengeDay = this.user.getCurrentChallengeDay();
  }

  ngAfterViewInit() {

    if(this.challengeDay == "1"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 127, 52)');
    }
    else if(this.challengeDay == "2"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "3"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "4"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.four.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "5"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.four.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.five.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "6"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.four.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.five.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.six.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "7"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.four.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.five.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.six.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.seven.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "8"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.four.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.five.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.six.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.seven.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.eight.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "9"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.four.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.five.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.six.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.seven.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.eight.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.nine.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    else if(this.challengeDay == "10"){
      this.one.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.two.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.three.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.four.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.five.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.six.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.seven.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.eight.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.nine.nativeElement.style.setProperty('background-color','rgb(207, 52, 52)');
      this.ten.nativeElement.style.setProperty('background-color','var(--current-background-color)');
    }
    
  }

}
