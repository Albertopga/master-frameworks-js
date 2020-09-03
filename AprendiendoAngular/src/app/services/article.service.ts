import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Global } from './global';

@Injectable()
export class ArticleService {
    url: string;
    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }

    pruebas() {
        return "Soy el servicio de artículos"
    }

    getArticles(): Observable<any> {
        return this._http.get(this.url + 'articles')
    }
}