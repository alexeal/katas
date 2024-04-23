import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';
import { CartService } from '../../services/cart.service';
import { Action } from '../enums/action.enum';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles$: Observable<Array<Article>> | undefined;

  constructor(
    private articlesService: ArticlesService, 
    private cartService: CartService
  ) {
    this.articles$ = this.articlesService.getArticles();
    this.cartService.updateArticleArgs$.subscribe(data => {
      // TODO
    });
  }

  addArticleToCart(article: Article) {
    this.cartService.updateArticle(article, Action.ADD);
  }

  removeArticleToCart(article: Article) {
    this.cartService.updateArticle(article, Action.DELETE);
  }

}
