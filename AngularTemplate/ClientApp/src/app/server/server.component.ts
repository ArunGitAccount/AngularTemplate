import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss']
})
/** server component*/
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Testserver";
    /** server ctor */
  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 5000);
  }
  getServerStatus() {
    return this.serverStatus;
  }
  onCreateServer() {
    this.serverCreationStatus = "Server was created!! The name is " + this.serverName;
  }
  onUpdateServerName(event: Event) {
    //console.log(event); 
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
