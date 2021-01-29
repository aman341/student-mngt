import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-mngt';
  name = "Hello I m Ram";

  show(){
    alert("Hey");
  }
}
