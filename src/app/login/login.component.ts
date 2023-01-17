import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  responseData!: any;

  userId !: any;
  userName !: any;
  password !: any;
  ePassword!:any;
  status !: boolean;
  msg !: String;

  urlToHit: string = 'http://localhost:8080/Customers/checkId/';


  constructor(private httpClient: HttpClient) {
    console.log(this.userId);
  }


 checkId() {
    console.log(this.userId);
  
    this.httpClient.get(this.urlToHit + this.userId).subscribe((response) => {
      this.responseData = response;
      if(response!=null){
       console.log("response id : " + this.responseData.customerRimNumber);
       console.log("response password :" + this.responseData.password);
       this.status = true;
       console.log("status in http client : "+ this.status)
       this.password =this.responseData.password;
       this.userName=this.responseData.customerName;
       this.checkPassword()

      }else
      this.msg = "invalid username"
      
    })
  

  }

  checkPassword(){
    if(this.password==this.ePassword){
      this.msg = "welcome " + this.userName }
      else{
      this.status = false;
      this.msg = "Invalid password"}
  }



}
