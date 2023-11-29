import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Chapter3Service {
  baseUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  public getChapter3Hello() {
    return this.http.get(`${this.baseUrl}chap3/`);
  }

  public processImage(
    file: File,
    processor_name: string,
    extra_value: string,
  ): Observable<{ [key: string]: string }> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('processor_name', processor_name);
    formData.append('extra_value', extra_value);
    return this.http.post<{ [key: string]: string }>(
      `${this.baseUrl}chap3/`,
      formData,
    );
  }
}
