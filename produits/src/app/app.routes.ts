import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      title: 'Accueil',
      data: { breadcrumb: 'Accueil' },
      component: HomeComponent
    },
    {
      path: 'articles',
      title: 'Articles',
      data: { breadcrumb: 'articles' },
      component: ArticlesComponent,
      children: [
        {
          path: 'article',
          data: { breadcrumb: 'article' },
          component: ArticleComponent
        },
      ],
    }
];
