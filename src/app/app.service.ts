import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = "https://neerab0011-rematter-backend.hf.space"
  // url = "http://localhost:4200"
  public constructor(private http:HttpClient) {
  }

  extractData(formData:any){
    return this.http.post(`${this.url}/process-image`, formData);
  }
  getCurrentDateTimeServer(): Observable<{current_time:string}>{
    return this.http.get<{current_time:string}>(`${this.url}/now`)
  }

}
