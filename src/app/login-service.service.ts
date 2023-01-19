import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor() {
   }

   userId !: any;
   userName !: any;
   password !: any;
   userRow !: any;

  //  urlToHit: string = 'http://localhost:8080/Customers/checkId/';
  //  checkId(userid : any) {

  //   this.httpClient.get(this.urlToHit + userid).subscribe((response) => {
  //     this.userRow = response;
  //     this.password =this.userRow.password;
  //     this.userName=this.userRow.customerName;
  //    if(response!=null){
  //       console.log("response id : " + this.userRow.customerRimNumber);
  //     //  console.log("response password :" + this.userRow.password);
  //      this.status = true;

  //    }
      
  //   })
  

  // }

input(userid: any, username: any, password: any){
this.userId=userid;
this.userName=username;
this.password=password;
}

}

