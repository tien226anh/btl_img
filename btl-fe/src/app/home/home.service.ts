import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = env.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getHome() {
    return this.http.get(`${this.baseUrl}`);
  }

}
