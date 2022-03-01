import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { item } from '../pages/item/item.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  getProduct(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/product/getall")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 

}
