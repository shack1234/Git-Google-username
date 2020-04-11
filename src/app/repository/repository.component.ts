import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { UserService } from '../user.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  userRepo: Repositories;

  constructor( public repoService: UserService) { }
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
      this.getRepo('shack1234');
    }
  }
