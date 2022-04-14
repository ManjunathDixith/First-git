import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private httpclient: HttpClient
  ) { }

  makeApiRequest(){
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    return this.httpclient.get(url)
  }
}
