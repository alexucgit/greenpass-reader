import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ResponseGP} from '../../model/responseGP';

@Injectable({
  providedIn: 'root'
})
export class GpService {

  constructor(private http: HttpClient) { }

  getData(text: string): Observable<ResponseGP> {
    const params = new HttpParams().set('raw', text);
    return this.http.post<ResponseGP>(environment.nodeServer, {params});
  }
}
