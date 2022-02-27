import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analyticsService';
import { Data } from 'src/app/services/DataModels/data';
import { Engrais } from 'src/app/services/DataModels/engrais';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  engrais: Engrais[] =[]; 
  count: any;   
  constructor(private analyticsService: AnalyticsService) { }
  
  ngOnInit(): void {

    this.analyticsService.getEngrais().subscribe((resp: Data) => {
      this.engrais = resp.result.records;
      this.count=this.engrais.length;
      console.log( typeof(resp));
      console.log(this.engrais[0]);
    });

    /*this.engrais=this.analyticsService.getEngrais(this.engrais)
    console.log(this.engrais);
    console.log(this.engrais);
    console.log("I am here");  */
    
  }

}
