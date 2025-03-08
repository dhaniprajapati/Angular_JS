import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imgUrl= "th.jpg";
  url= "https://www.bridgelabz.com/";
  message: string = "Hello from BridgeLabz";

  onClick($event: any){
    console.log("Save button is clicked!",$event);
    window.open(this.url, "_blank");
  }
}
