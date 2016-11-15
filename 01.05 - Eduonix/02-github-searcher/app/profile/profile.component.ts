import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    
    constructor(private _gitHubServ:GitHubService) { }

    ngOnInit() { 
        this._gitHubServ.getUser()
            .subscribe(user=>{
                console.log(user);
            });
    }
}