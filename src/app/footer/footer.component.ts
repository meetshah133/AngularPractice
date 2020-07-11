import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userService;
  myData= [];
  constructor(user: UserService) { 
    this.userService= user;
  }
 
  ngOnInit() {
   // this.loadUsers();

  }
  addUser(nf: NgForm){
    console.log("user added ");
    
     this.userService.addUserToDb(nf.value);
    
  }
  loadUsers(){
    this.userService.loadUsers().subscribe(response=>{
      //console.log(response);
      
      const user = []
      for(let u in response){
        user.push(response[u])
      }
      this.myData=user;
    });
  }



}
