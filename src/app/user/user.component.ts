import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Repositories } from '../repositories';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //  getting username from github
  user: User;
    constructor(public userService: UserService,public repoService: UserService ) {
    }
    get(username) {
      this.userService.getUser(username).then(
        ()=>{
          this.user = this.userService.searchUser;
        },
        (error)=>{
          console.log("No username Found")
        }
      );
    }
    userRepo: Repositories;

    getRepo(username){
      this.repoService.getRepositories(username).then(
        ()=>{
          this.userRepo =this.repoService.repositories
          console.log(this.userRepo);
        },
        (error)=>{
          console.log("No repositories by that name");
        }
      );
    }
    ngOnInit() {
      this.get('shack1234');
    }
  }

