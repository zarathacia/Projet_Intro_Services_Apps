import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { AnalyticsHTTPService } from './analytics-http/analytics-http-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class AnalyticsService implements OnDestroy {
  // private fields
  showLoading: boolean;


  // public fields
 
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  isConnected: Boolean;

  constructor(
    private analyticsHttpService: AnalyticsHTTPService,
    private router: Router
  ) {
    this.isLoading$ = this.isLoadingSubject.asObservable();

  }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

  // public methods

}
