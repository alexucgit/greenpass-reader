import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import * as url from "url";
import {GP} from "../model/gp";
import {ResponseGP} from "../model/responseGP";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File = null;
  fd = new FormData();
  gp: GP;

  risultato: ResponseGP;

  constructor(private http: HttpClient) {
  }

  createFormData(event): any {
    this.selectedFile = event.target.files[0] as File;
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
  }

  upload(): any {
    const param: HttpParams = new HttpParams();
    param.append('Authorization', '*');
    this.http.post<ResponseGP>('http://localhost:3004', this.fd)
    .subscribe(result => {
      this.risultato = result;
    });
  }

  ciao(e: any): any {
    if (!e) {
      return;
    }
    const headers = {'Access-Control-Allow-Origin': '*'};


    this.gp = e as GP;
    const params = new HttpParams().set('stringa', this.gp.text);
    console.log(this.gp.text.toString());
    console.log('=====');
    console.log(encodeURI(this.gp.text));
    this.http.post<ResponseGP>('http://localhost:3002/', {params})
    .subscribe(result => {
      this.risultato = result;
    });
  }
}
