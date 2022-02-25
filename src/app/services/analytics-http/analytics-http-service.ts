import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const endpoint = 'http://localhost:3000/api/v1/';
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
export class AnalyticsHTTPService {
  constructor(private http: HttpClient) {}


}
