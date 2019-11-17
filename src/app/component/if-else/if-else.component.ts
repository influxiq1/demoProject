import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  public allowNewServer:any = false;
  public serverName: any ='Test Server';
  public showSelect: any = false;
  servers = ['TestServer', 'testServer 2'];
  log = [];
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 5000);
 }
  ngOnInit() {
  }
  onServerCreate() {
    console.log('is working');
    // this.servers.push(this.serverName)
    this.log.push(new  Date())
  }

}
