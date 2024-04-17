import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles$: Observable<Array<Article>> | undefined;

  constructor(private articlesService: ArticlesService, private activatedRoute: ActivatedRoute) {
    this.articles$ = this.articlesService.getArticles();
  }
}
