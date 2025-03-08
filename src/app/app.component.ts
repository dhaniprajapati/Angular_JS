import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  imgUrl= "th.jpg";
  url= "https://www.bridgelabz.com/";
  userName: string= "";

  onClick($event: any){
    console.log("Save button is clicked!",$event);
    window.open(this.url, "_blank");
  }
}
