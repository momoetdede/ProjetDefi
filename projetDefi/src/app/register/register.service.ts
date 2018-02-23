import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  sendRegisterInfo(civ,nom,prenom,age,pseudo,email,password) {
    console.log("envoi")
    console.log("http://192.168.1.38:8080/projet/register-service?var1=register&var2="+civ+
    '&var3='+nom+
    '&var4='+prenom+
    '&var5='+age+
    '&var6='+pseudo+
    '&var7='+email+
    '&var8='+password
    )
    return this.httpClient.get("http://192.168.1.38:8080/projet/register-service?var1=register&var2="+civ+
    '&var3='+nom+
    '&var4='+prenom+
    '&var5='+age+
    '&var6='+pseudo+
    '&var7='+email+
    '&var8='+password
    );
 }
}
