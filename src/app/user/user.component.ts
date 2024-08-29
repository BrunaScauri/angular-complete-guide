import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model'
// import images from '

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({ required: true }) user!: User; //type: object
  @Output() select = new EventEmitter();
  // select = output<string>(); -> another way of setting a decorator. It will not send a signal, though.
  @Input({ required: true }) selected!: boolean;

  get userAvatar() {
    return '../../../public/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
