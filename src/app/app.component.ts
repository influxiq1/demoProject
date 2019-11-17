import { Component } from '@angular/core';
import { ApiService } from '../app/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartestProject';
  constructor() {
    // this.apiService.getClientIp().subscribe(res=>{
    //   console.log(res);
    // })
  }
}
