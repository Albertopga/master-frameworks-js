import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'
import { Article } from '../../models/article'
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]

})

export class BlogComponent implements OnInit {
  articles: Article[];
  //url: string;


  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    //this.url = Global.url
    this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        }
      }, error => {
        console.log(error)
      }
    )
  }

}
