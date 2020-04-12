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
  userRepo: Repositories;
    constructor(public userService: UserService,private repoService: UserService ) {
    }
    get(username) {
      this.userService.getUser(username).then(
        (success)=>{
          this.user = this.userService.searchUser;
        },
        (error)=>{
          console.log(error)
        }
      );
      this.repoService.getRepositories(username).then(
        ()=>{
          this.userRepo =this.repoService.repositories
          console.log(this.userRepo);
        },
        (error)=>{
          console.log(error);
        }
      );
      }
    ngOnInit() {
      this.get('shack1234');
    }
  }
