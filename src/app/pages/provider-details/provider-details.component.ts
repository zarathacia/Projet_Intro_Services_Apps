import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { supplier } from '../provider-details/provider-details.model'



const details = [ {name:'EL KHADHRA',descrip:'Distribution des Produits Agricoles' ,adresse:'Monastir, Tunisie',email:'ste.khadra@topnet.tn', web:'www.elkhadra.tn' ,tel:'(+216) 73 462 925' },]
@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {
  details= details;
  supplierid:any;
  supplier:any;

  private baseUrl = 'http://localhost:8080/api/supplier/getBySupplier';
  constructor(private http : HttpClient , private route: ActivatedRoute){
    this.ngOnInit()
  }
  

  ngOnInit(): void {
    console.log("provider-details Component")
    this.route.paramMap.subscribe(params =>{
      this.supplierid = params.get('id');
      console.log(this.supplierid)
    });
    this.supplier=this.getSupplierById(this.supplierid).subscribe(res=>{
      this.supplier=res;
      console.log(this.supplier.name)
      })
  }
  getSupplierById(id: number){
    return this.http.get<supplier>(`${this.baseUrl}/${id}`)
                      .pipe(catchError(this.handleError));
  }
  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

}
