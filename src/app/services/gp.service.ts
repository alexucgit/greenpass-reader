import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ResponseGP} from '../../model/responseGP';
import * as country from '../../assets/value-sets/country-2-codes';
import * as diseaseAgent from '../../assets/value-sets/disease-agent-targeted';
import * as testManf from '../../assets/value-sets/test-manf';
import * as testResult from '../../assets/value-sets/test-result';
import * as testType from '../../assets/value-sets/test-type';
import * as vaccineMahManf from '../../assets/value-sets/vaccine-mah-manf';
import * as vaccineMedicinalProduct from '../../assets/value-sets/vaccine-medicinal-product';
import * as vaccineProphylaxis from '../../assets/value-sets/vaccine-prophylaxis';


@Injectable({
  providedIn: 'root'
})
export class GpService {

  constructor(private http: HttpClient) { }

  getData(text: string): Observable<ResponseGP> {
    const params = new HttpParams().set('raw', text);
    return this.http.post<ResponseGP>(environment.nodeServer, {params});
  }

  getCountry(c: string): string {  return country.country.valueSetValues[c].display; }

  getDiseaseAgent(a: string): string { return diseaseAgent.diseaseAgent.valueSetValues[a].display; }

  getTestManf(a: string): string { return testManf.testManf.valueSetValues[a].display; }

  getTestResult(a: string): string { return testResult.testResult.valueSetValues[a].display; }

  getTestType(a: string): string { return testType.testType.valueSetValues[a].display; }

  getVaccineManf(a: string): string { return vaccineMahManf.vaccineMahManf.valueSetValues[a].display; }

  getVaccineMedicinalProduct(a: string): string {  return vaccineMedicinalProduct.vaccineMedicinalProduct.valueSetValues[a].display; }

  getVaccineProphylaxis(a: string): string { return vaccineProphylaxis.vaccineProphylaxis.valueSetValues[a].display; }

}
