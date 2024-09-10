import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Characters } from "../interface";

export interface data {
  items: Characters[];
  links: string;
  meta: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private urlApi : string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getData() : Observable<data>{
    const endpoint = "characters?page=4";
    return this.http.get<data>(this.urlApi + endpoint);
  }
}
