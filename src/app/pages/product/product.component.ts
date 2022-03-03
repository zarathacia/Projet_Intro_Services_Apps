import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { item } from '../item/item.model';
//import { ItemService } from 'src/app/services/ItemService';


@Component({
  selector: 'app-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  itemId:any;
  Item:any;
  private baseUrl = 'http://localhost:8080/api/product/getById';
  constructor(private http : HttpClient , private route: ActivatedRoute){
    this.ngOnInit()
  }
  //private route: ActivatedRoute,private itemService:ItemService 
  ngOnInit() {
    console.log("product Component")
    this.route.paramMap.subscribe(params =>{
      this.itemId = params.get('id');
      console.log(this.itemId)
    });
    this.Item=this.getItemById(this.itemId).subscribe(res=>{
      this.Item=res;
      console.log(this.Item.name)
      })

    //this.getproductById(this.itemId);
  }
 // getproductById(ItemId:any){
   // this.Item=this.itemService.getItemById(ItemId)
    //console.log(this.Item);
  //}
  getItemById(id: number){
    return this.http.get<item>(`${this.baseUrl}/${id}`)
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