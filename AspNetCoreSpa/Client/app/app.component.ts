import { Component } from '@angular/core';



@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls:['../../wwwroot/styles/primeng.css']
})
export class AppComponent {
     UserName="MyUserName";
     Balance=100;
     Rating=3;
     UserPic = "http://www.dpa.cv.ua/wp-content/uploads/2014/02/3f.jpg";
  
}
