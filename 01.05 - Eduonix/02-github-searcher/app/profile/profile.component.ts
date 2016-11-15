import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile-app',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    private user:any;
    constructor(private _gitHubServ:GitHubService) { }

    ngOnInit() { 
        this._gitHubServ.getUser()
            .subscribe(user=>{
                this.user = user;
            });
    }
}