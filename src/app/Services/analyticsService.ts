import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/api/v1/';

const agridataEndpoint="http://agridata.tn/fr/api/3/action/datastore_search_sql?sql="
const engraisDataset="9d1d4c92-9a64-44f0-bb4c-18bf581e3aa5/resource/7ea488c6-ed1d-4005-8239-b40125897d7a"
const sql="SELECT * from "+ engraisDataset
//Nasa
const nasaEndpoint=' https://power.larc.nasa.gov/cgi-bin/v1';
const format='json'
const solarFlux=[
  
]
const parameters=[
  'QV2M',
  'RH2M',
  'PRECTOTCORR',
  'CLRSKY_SFC_PAR_TOT',
  'T2M',
  'T2MDEW',
  'T2MWET',
  'TS',
  'T2M_RANGE',
  'T2M_MAX',
  'T2M_MIN',
  'ALLSKY_SFC_LW_DWN',
  'GWETTOP',
  'GWETROOT',
  'PS',
  'WS2M'
]
//https://power.larc.nasa.gov/api/temporal/daily/point?parameters=&community=AG&longitude=10.0000&latitude=36.0000&start=20210101&end=20210331&format=CSV

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private http: HttpClient) {}

  public sendGetRequest(){
    return this.http.get(agridataEndpoint + sql);
    
  }

  /*getEngraisList(): Observable<any>
  {
    //http://agridata.tn/dataset//download/metaengrais.xlsx
    var sql="SELECT * from "+ engraisDataset
    console.log(agridataEndpoint + sql)
    return this.http.get(agridataEndpoint + sql).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }*/
  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
