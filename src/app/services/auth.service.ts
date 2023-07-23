import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginRequest } from '../models/loginrequest';

const AUTH_API = 'https://localhost:7130/WeatherForecast/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json',  'access-control-allow-origin':'*'  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(request:loginRequest ): Observable<any>{
    return this.http.post(AUTH_API,request,httpOptions)
}
}
