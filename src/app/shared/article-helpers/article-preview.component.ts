import { Component, Input } from "@angular/core";
import { Article } from "../../core/models/article.model";
import { ArticleMetaComponent } from "./article-meta.component";
import { FavoriteButtonComponent } from "../buttons/favorite-button.component";
import { RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  imports: [
    ArticleMetaComponent,
    FavoriteButtonComponent,
    RouterLink,
    NgForOf,
    NgIf,
  ],
  standalone: true,
})
export class ArticlePreviewComponent {
  @Input() article!: Article;
  okArticle: boolean = false;

  constructor() {
    this.changerOkArticle();
  }

  changerOkArticle() {
    console.log("okArticle start");
    this.heavyCalculation();
    console.log("okArticle end");
    this.okArticle = true;
  }

  heavyCalculation() {
    let sum = 0;
    for (let i = 0; sum < 400000; i++) {
      sum += i;
      console.log(sum);
    }
    return sum;
  }

  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
