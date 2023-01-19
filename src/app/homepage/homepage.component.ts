import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  userId : any = this.service.userId
  
  userName: any= this.service.userName
  constructor(private service: LoginServiceService){

  }

  // localstorage
  withdraw(){
console.log(this.userId)
  }
}
