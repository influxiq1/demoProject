import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable, ViewChild, EventEmitter, ElementRef} from '@angular/core';
import { Observable, interval, pipe } from 'rxjs';
import { switchMap, map, takeWhile } from 'rxjs/operators';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  getClientIp() {
    var result = this.http.get("https://ipinfo.io/?format=json&token=aa9acd97b9583b").pipe(map(res => res));
    return result;
  }
}
