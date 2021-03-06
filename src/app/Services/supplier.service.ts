import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }

  getSuppliers(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/supplier/getall")
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }))
  }
}
