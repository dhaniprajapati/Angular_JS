
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(FormsModule)]
}).catch(err => console.error(err));
