import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Article } from '../../models/article.model';
import { UpdateArticleArgs } from '../../models/update-article-args.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  subscription: Subscription;
  updateArticleArgs: UpdateArticleArgs = {};

  constructor(private cartService: CartService) {
    this.subscription = this.cartService.updateArticleArgs$.subscribe(data => {
      this.updateArticleArgs = data;
      console.log(this.updateArticleArgs)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
