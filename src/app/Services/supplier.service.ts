import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }
  getProduct(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/product/getall")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
