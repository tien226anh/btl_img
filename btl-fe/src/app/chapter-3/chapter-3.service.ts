import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Chapter3Service {

  baseUrl = env.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getChapter3Hello() {
    return this.http.get(`${this.baseUrl}chap3/`)
  }

}
