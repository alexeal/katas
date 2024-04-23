import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import ProduitsData from "../data/produits.json";
import { Article } from '../models/article.model';

@Injectable({
    providedIn: 'root',
})
export class ArticlesService {
    // TODO : un BehaviorSubject ?
    constructor() { }

    public getArticles(): Observable<Array<Article>> {
        return of(ProduitsData);
    }

    updateArticles() {
        // TODO; Add/Remove article from articles list
    }
}