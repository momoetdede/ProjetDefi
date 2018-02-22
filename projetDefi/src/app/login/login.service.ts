import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  private userLoggedIn = false;
  private userPseudo;

  constructor(private httpClient: HttpClient) {
   }

  setUserLoggedIn(){
    this.userLoggedIn = true;
  }

   getUserLoggedIn(){
    let dataUser = JSON.parse(sessionStorage.getItem('user'));
    return dataUser.connected;
  }

  setUserPseudo(pseudo){
    this.userPseudo = pseudo;
  }

   getUserPseudo(){
    return this.userPseudo;
  }

  sendLoginInfo(email,password) {
    console.log("envoi login")
    console.log("http://localhost:8081/projet/login-service?var1=login&var2="+email+
    '&var3='+password
    )
    return this.httpClient.get("http://localhost:8081/projet/login-service?var1=login&var2="+email+
    '&var3='+password
    );
 }

}
