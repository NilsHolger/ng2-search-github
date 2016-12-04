import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private userName: string;
  private client_Id: string = '22c62016a647cc236d65';
  private client_Secret: string = '95e056086020895fd84f9820b1617505fc1430e1';

  constructor(private http: Http) { 
    console.log('github service ready');
    this.userName = 'NilsHolger';
  }

  fetchUser() {
    return this.http.get(`http://api.github.com/users/${this.userName}?client_id=${this.client_Id}&client_secret=${this.client_Secret}`)
                     .map(response => response.json());
  }

  fetchRepositories() {
    return this.http.get(`http://api.github.com/users/${this.userName}/repos?client_id=${this.client_Id}&client_secret=${this.client_Secret}`)
                    .map(response => response.json());
  }

  updateUser(userName: string){
    this.userName = userName;
  }
}
