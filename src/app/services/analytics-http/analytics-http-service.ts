import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const API_USERS_URL = `/url`;


@Injectable({
  providedIn: 'root',
})
export class AnalyticsHTTPService {
  constructor(private http: HttpClient) {}


}
