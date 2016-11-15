import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';

@Injectable()
export class FotoService {

    headers: Headers;
    url: string = 'v1/fotos';

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastra(foto: FotoComponent): Observable<MensagemCadastro> {
        if (foto._id) {
            return this.http
                .put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers })
                .map(() => new MensagemCadastro('Foto alterada c/ sucesso', false));
        } else {
            return this.http
                .post(this.url, JSON.stringify(foto), { headers: this.headers })
                .map(() => new MensagemCadastro('Foto cadastrada c/ sucesso', true));
        }
    }

    lista(): Observable<FotoComponent[]> {
        return this.http
            .get(this.url)
            .map(res => res.json());
    }

    remove(foto: FotoComponent): Observable<Response> {
        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id: string): Observable<FotoComponent> {
        return this.http.get(this.url + '/' + id)
            .map(res => res.json());
    }
}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) { }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {
        return this._inclusao;
    }
}