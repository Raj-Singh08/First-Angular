import { Component , signal , computed} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  //selectedUser = DUMMY_USERS[randomIndex]; //selectedUser is now accessible in the template
  selectedUser = signal(DUMMY_USERS[randomIndex]); // Using signal to make selectedUser reactive

  imagePath = computed(() => 'assets/users/'+this.selectedUser().avatar); // Using computed to derive the image path reactively

  // get imagePath() {
  //   return 'assets/users/'+this.selectedUser.avatar;  //get imagePath is a getter that returns the path to the user's avatar image
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); // Update the selected user using signal
    //this.selectedUser = DUMMY_USERS[randomIndex]; 
  }
}
 