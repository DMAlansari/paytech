import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

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


  constructor(private httpClient: HttpClient, private router: Router , private service: LoginServiceService) {
    console.log(this.userId);
  }

  // constructor( private router: Router, private service: LoginServiceService ) {
  //   // console.log(this.userId);
  // }

  // checkService(){
  //   this.service.checkId(this.userId)
  //   // console.log(this.service.userName)
  //   // console.log(this.service.password)
  //   // console.log(this.status=this.service.status)

    
  // }

 checkId() {
    console.log(this.userId);
  
    this.httpClient.get(this.urlToHit + this.userId).subscribe((response) => {
      this.responseData = response;
      if(response!=null){
       console.log("response id : " + this.responseData.customerRimNumber);
       console.log("response password :" + this.responseData.password);
       this.status = true;
       console.log("status in http client : "+ this.status)
       localStorage.setItem('userId',this.responseData.customerRimNumber)
       this.password =this.responseData.password;
       localStorage.setItem('userName',this.responseData.customerName)
       this.checkPassword()

      }else
      this.msg = "invalid username"
      
    })
  

  }



  checkPassword(){
    if(this.password==this.ePassword){
      localStorage.setItem('password',this.responseData.password)
      this.msg = "welcome " + this.userName 
      this.service.input(this.userId, this.userName,this.password)
      this.rout();}
      else{
      this.status = false;
      this.msg = "Invalid password"}
  }

  rout(){
      this.router.navigateByUrl('/homepage');
    }

  }




