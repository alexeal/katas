import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Article } from '../models/article.model';
import { UpdateArticleArgs } from '../models/update-article-args.model';
import { Action } from '../app/enums/action.enum';



@Injectable({
    providedIn: 'root',
})
export class CartService {
    private updateArticleArgsSubject$: BehaviorSubject<UpdateArticleArgs> = new BehaviorSubject({});
    updateArticleArgs$ = this.updateArticleArgsSubject$.asObservable();

    private cart$ = new BehaviorSubject<Array<Article>>([]);
    cartList$ = this.cart$.asObservable();

    updateArticle(article: Article, action: Action) {
        this.updateArticleArgsSubject$.next({ article: article, action: action });
    }

    setCartList(articles: Array<Article>) {
        this.cart$.next(articles);
    }
}
