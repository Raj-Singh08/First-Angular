import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(App)
  .catch((err) => console.error(err));

