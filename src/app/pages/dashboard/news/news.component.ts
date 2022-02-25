import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analyticsService';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  engrais = [];
  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    /*this.analyticsService.sendGetRequest().pipe((data: any[])=>{
      console.log(data);
      this.engrais = data;
    })*/
  }

}
