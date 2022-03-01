import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';

const API_USERS_URL = `${environment.apiUrl}/user`;


@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  private jwtHelper = new JwtHelperService();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  // public methods
  login(email: string, password: string): Observable<HttpResponse<UserModel>> {
    return this.http.post<UserModel>(`${API_USERS_URL}/login`, {email, password,}, {observe : 'response'});
  }

  // CREATE =>  POST: add a new user to the server
  createUser(fullName: string, email: string, password: string, confirmedPassword: string): Observable<object> {
    return this.http.post(`${API_USERS_URL}/register`, {fullName, email, password, confirmedPassword});
  }

  createUserTry(): Observable<object> {
    return this.http.post(`${API_USERS_URL}/register`, {fullName:"Yessine Bouziz", email:"yessine.bouaziz@supcom.tn", password:'123456789', confirmedPassword:'123456789'});
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
      email,
    });
  }

  getUserByToken(token: string): Observable<UserModel> {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<UserModel>(`${API_USERS_URL}/me`, {
      headers: httpHeaders,
    });
  }

  addUserToCache(user: UserModel): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromCache(): UserModel {
    return JSON.parse(localStorage.getItem('user') || '');
  }

  addTokenToCache(token: string): void {
    localStorage.setItem('token', token);
  }

  getTokenFromCache(): string {
    return localStorage.getItem('token') || '';
  }

  logOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  getTokenExpirationDate(): Date | null {
    return this.jwtHelper.getTokenExpirationDate(this.getTokenFromCache());
  }

 

  createUserFormData(currentUsername: string, user: UserModel): FormData {
    const formData = new FormData();
    formData.append('currentUsername', currentUsername);
    formData.append('fullName', user.fullname);
    formData.append('email', user.email);
    formData.append('role', user.role);
    formData.append('isActive', JSON.stringify(user.active));
    formData.append('isNonLocked', JSON.stringify(user.notLocked));
    return formData;
  }
}
