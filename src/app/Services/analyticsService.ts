import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from './DataModels/data';

const endpoint = 'http://localhost:3000/api/v1/';


const agridataEndpoint="http://agridata.tn/fr/api/3/action/datastore_search_sql?sql="
const engraisDataset="%227ea488c6-ed1d-4005-8239-b40125897d7a%22"
const sql="SELECT%20*%20from%20"+ engraisDataset
//"http://agridata.tn/fr/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%227ea488c6-ed1d-4005-8239-b40125897d7a%22"
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
  
  public getEngrais(){ 
    console.log("GetENgrais ")
  return this.http.get<Data>(agridataEndpoint + sql).pipe(
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
