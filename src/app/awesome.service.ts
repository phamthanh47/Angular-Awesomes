import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Awesome} from './awesome';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  API_URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }
  getAwesomeList(): Observable<Awesome[]> {
    return this.httpClient.get<Awesome[]>(this.API_URL + 'awesomes');
  }
  getAwesome(id: number): Observable<Awesome> {
    return this.httpClient.get<Awesome>(`${this.API_URL}awesomes/${id}`);
  }
  updateAwesome(awesome: Awesome): Observable<Awesome> {
    return this.httpClient.put<Awesome>(`${this.API_URL}awesomes/${awesome.id}`, awesome);
  }
  deleteAwesome(id: number): Observable<Awesome> {
    return this.httpClient.delete<Awesome>(`${this.API_URL}awesomes/${id}`);
  }
  addAwesome(awesome: Awesome): Observable<Awesome> {
    return this.httpClient.post<Awesome>(this.API_URL + 'awesomes', awesome );
  }
}
