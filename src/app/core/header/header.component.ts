import { Component } from '@angular/core';
import { User, UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public user$: Promise<User>;

  constructor(
    userService: UserService
  ) {
    this.user$ = userService.login('test@login.com', 'secret!');
  }

}
