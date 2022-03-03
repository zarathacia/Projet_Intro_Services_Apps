import { Component, OnInit , Input} from '@angular/core';
import { News } from 'src/app/services/DataModels/news';
import { NewsService } from 'src/app/services/newsService';
import { getCSSVariableValue } from 'src/app/_metronic/kt/_utils';




@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
  chartOptions: any = {};
  @Input() chartColor: string = 'primary';
  @Input() chartHeight: string='175px';
  

  news:any=[]; 
  count: any;  
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions('175px', 'primary');

    this.newsService.getNews().subscribe((resp: News) => {
      this.news = resp.articles.slice(0,7);

      this.count=this.news.length;
      console.log(this.news[0]['publishedAt']);
    });
    

  function getChartOptions(chartHeight: string, chartColor: string) {
    const labelColor = getCSSVariableValue('--bs-gray-500');
    const borderColor = getCSSVariableValue('--bs-gray-200');
    const secondaryColor = getCSSVariableValue('--bs-gray-300');
    const baseColor = getCSSVariableValue('--bs-' + chartColor);
  
    return {
      series: [
        {
          name: 'Date',
          data: [1987,
            1988,
            1989,
            1990,
            1991,
            1992,
            1993,
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
          
          ],
        },
        {
          name: 'Revenue',
          data: [
            122657.88
            ,99862.15
,114974.7
,132006.4
,152977.71
,122797.56
,130301.79
,98666.599
,97242.106
,139593.64
,107411.42
,117058.07
,124114.36
,113676.24
,107194.35
,92190.897
,116702.64
,115920.78
,116631.26
,118098.59
,122305.248,

          ],
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: chartHeight,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['solid'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
      },
      fill: {
        type: 'solid',
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function (val: number) {
            return '$' + val + ' revenue';
          },
        },
      },
      colors: [baseColor, secondaryColor],
      grid: {
        padding: {
          top: 10,
        },
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };
  }
}
}