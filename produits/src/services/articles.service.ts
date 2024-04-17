import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import ProduitsData from "../data/produits.json";
import { Article } from '../models/article.model';

@Injectable({
    providedIn: 'root',
})
export class ArticlesService {
    constructor() { }

    public getArticles(): Observable<Array<Article>> {
        return of(ProduitsData);
    }
}