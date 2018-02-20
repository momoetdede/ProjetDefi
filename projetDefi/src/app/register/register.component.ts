import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RegisterService } from './register.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  code: any;
  message:any;
  registerEmail: any;
  registerPseudo: any;
  registerAge: any;
  registerFirstName: any;
  registerLastName: any;
  registerCiv: any;
  registerPassword: any;
  registerPasswordVerif: any;
  formdata;
  civiliteList;
  ageList;
  constructor(private registerSend:RegisterService) { 
    this.civiliteList = ["","M.","Mme."];
    this.ageList = ["","18","19","20"];
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      registerCiv: new FormControl("", Validators.required
      ),
      registerLastName: new FormControl("", Validators.compose([
       Validators.required,
       Validators.minLength(1)
      ])),
      registerFirstName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      registerAge: new FormControl("", Validators.required
      ),
      registerPseudo: new FormControl("", Validators.compose([
       Validators.required,
       Validators.minLength(1)
      ])),
      registerEmail: new FormControl("", Validators.compose([
       Validators.required,
       Validators.minLength(1)
      ])),
      registerPassword: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      registerPasswordVerif: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))
   });
  }

  onClickSubmit(data) {
    this.registerCiv = data.registerCiv;
    this.registerLastName = data.registerLastName;
    this.registerFirstName = data.registerFirstName;
    this.registerAge = data.registerAge;
    this.registerPseudo = data.registerPseudo;
    this.registerEmail = data.registerEmail;
    this.registerPassword = data.registerPassword;
    this.registerPasswordVerif = data.registerPasswordVerif;
    this.registerSend.sendRegisterInfo(this.registerCiv,this.registerLastName,this.registerFirstName, this.registerAge, this.registerPseudo, this.registerEmail,this.registerPassword)
    .subscribe((data:any) => {
      console.log("data : "+data);
        this.code = data['code'];
        this.message = data['message'];
        console.log("code : "+this.code);
        console.log("message : "+this.message);
    });
  }

}
