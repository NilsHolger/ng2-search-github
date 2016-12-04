import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userName: string;
  repos: any[];

  constructor(private gitHubService: GitHubService) { this.user = false; }

  searchUser() {
    this.gitHubService.updateUser(this.userName);

    this.gitHubService.fetchUser().subscribe(user => { this.user = user; });

    this.gitHubService.fetchRepositories().subscribe(
        repo => { this.repos = repo; });
  }

  ngOnInit() {}
}
