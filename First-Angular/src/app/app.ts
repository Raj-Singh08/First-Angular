import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Importing the HeaderComponent
import { User } from './user/user'; // Importing the User component

@Component({
  selector: 'app-root',     // This is the root component of the application(Tells that this element needs to be replaced with this component)
  standalone: true,        // Indicates that this component is a standalone component
  imports: [HeaderComponent,User], // Importing the HeaderComponent to use it in this component
  templateUrl: './app.html',  // The HTML template for this component
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HotelInventory');
}
