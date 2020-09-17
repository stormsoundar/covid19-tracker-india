import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonCoreService {
  public hostUrl = 'https://api.covidindiatracker.com/total.json';
  public hostUrl1 = "https://api.covidindiatracker.com/state_data.json";

  constructor(private http: HttpClient) { }

  public getTotalInfo() {
    const url = this.hostUrl;
    return this.http.get(url);
  }

  public getStateInfo() {
    const url1 = this.hostUrl1;
    return this.http.get(url1);
  }

}
