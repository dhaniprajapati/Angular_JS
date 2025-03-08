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

  onInput($event: any){
    console.log("Change Event Occurred!",$event.data);
    const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.userName= $event.target.value;
    }else{
      this.userName= "";
    }
  }
}
