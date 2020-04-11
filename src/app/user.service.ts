import { Injectable } from '@angular/core';
import { User } from './user';
import { Repositories } from './repositories';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchUser: User;
  repositories: Repositories;

  constructor (private http: HttpClient) {
    this.searchUser = new User("", "", "", "", 0, 0, 0, "");
    this.repositories = new Repositories("", "", "", new Date, 0, "");
  }
  getUser(username: string) {
    interface apiResponse {
      url: string,
      login: string;
      html_url: string;
      location: string
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
    }
    return new Promise((resolve, reject) => {
      this.http.get<apiResponse>('https://api.github.com/users/' + username + '?access_token=' + environment.apiKey).toPromise().then(
        (result) => {
          this.searchUser = result;
          console.log(this.searchUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepositories(username) {
    interface apiResponse {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    return new Promise((resolve, reject) => {
      this.http.get<apiResponse>('https://api.github.com/users/' + username + "/repos?order=created&sort=asc?access_token=" + environment.apiKey).toPromise().then(
        (results) => {
          this.repositories = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}

