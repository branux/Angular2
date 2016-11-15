import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private username: string;
    private client_id: string = 'e3dad740e04e3c544bc7';
    private client_secret: string = 'd6681347a356b744fc806ac25010d0df87c8c0e5';

    constructor(private _http: Http) {
        console.log('GitHb service ready...');
        this.username = 'fnalin';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username +
            '?client_id=' + this.client_id + '?client_secret=' + this.client_secret)
            .map(res => res.json());
    }

     getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username +
            '/repos?client_id=' + this.client_id + '?client_secret=' + this.client_secret)
            .map(res => res.json());
    }
}