import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analyticsService';
import { NewsService } from 'src/app/services/newsService';
import { Data } from 'src/app/services/DataModels/data';
import { Engrais } from 'src/app/services/DataModels/engrais';
import { News } from 'src/app/services/DataModels/news';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  news:any=[]; 
  count: any;   
  constructor(private analyticsService: AnalyticsService,private newsService: NewsService) { }
  
  ngOnInit(): void {

    this.newsService.getNews().subscribe((resp: News) => {
      this.news = resp.articles;

      this.count=this.news.length;
      console.log(this.news[0]['title']);
    });
    
  }


  
}
