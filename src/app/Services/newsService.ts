//

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from './DataModels/data';
import { News } from './DataModels/news';

const apiKey='1b91913db71a453994a357f6f57e46fd';
const endpoint ="https://newsapi.org/v2/everything?q=agriculture&from=2022-02-03&sortBy=publishedAt&apiKey=1b91913db71a453994a357f6f57e46fd"

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  
  public getNews(){ 

  return this.http.get<News>(endpoint).pipe(
     catchError(this.handleError)
    );
  }
  headers: HttpHeaders | { [header: string]: string | string[]; };
  //to use

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}

