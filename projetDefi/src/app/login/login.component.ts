import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from './login.service';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  boolConnected;
  pseudo;
  currentChallenge;
  formdata;
  code;
  message;
  successCode = "200";

  constructor(private router: Router, private user:LoginService, private userInfo:UserService) { 
    if(sessionStorage.getItem('user')==null){
      let userData = {
        "connected":false
      };

      let strUser = JSON.stringify(userData);

      sessionStorage.setItem('user',strUser);
    }
    else{
      let dataUser = JSON.parse(sessionStorage.getItem('user'));
      this.boolConnected = dataUser.connected;
      this.pseudo = dataUser.pseudo;
      console.log(this.boolConnected);
    }
    this.currentChallenge = userInfo.getCurrentChallengeName();
  }
  ngOnInit() {
     this.formdata = new FormGroup({
        email: new FormControl("", Validators.compose([
           Validators.required,
           Validators.minLength(3)
        ])),
        password: new FormControl("", this.passwordvalidation)
     });
  }
  
  passwordvalidation(formcontrol) {
     if (formcontrol.value.length < 3) {
        return {"password" : true};
     }
  }
  
  onClickSubmit(data) {
    console.log("envoi : "+data.email);
    this.user.sendLoginInfo(data.email,data.password)
       .subscribe((data:any) => {
        console.log("data : "+data);
          this.code = data['code'];
          this.message = data['message'];
          this.pseudo = data['pseudo'];
          console.log("code : "+this.code);
          console.log("message : "+this.message);
          console.log("pseudo : "+this.pseudo);
          if (this.code == this.successCode) {
            alert("Login Successful");
            /**************** Ici sont enregistrées les données de session ******************/
            let userData = {
              "connected":true,
              "pseudo":this.pseudo
            };

            let strUser = JSON.stringify(userData);

            sessionStorage.setItem('user',strUser);
            /********************************************************************************/
            this.boolConnected=true;
            console.log(this.boolConnected);
            this.router.navigate(['main-component']);
           } else {
            alert("Invalid Login");
            this.boolConnected=false;
            this.router.navigate(['']);
            return false;
          }
      });
    
  }

}
