import { Component } from '@angular/core';
import { LocalStorage, StorageProperty } from 'h5webstorage';


@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls:['../../wwwroot/styles/primeng.css','app.component.css']
})
export class AppComponent {
    constructor(private localStorage: LocalStorage) {  }
    @StorageProperty({ storageKey: 'localId', storage: "Local" }) localId: string = "";
     UserName="MyUserName";
     Balance=100;
     Rating=3;
     UserPic = "http://www.dpa.cv.ua/wp-content/uploads/2014/02/3f.jpg";
     isLoggedIn = (() => {
         return (this.localId) != "";
     });
}
