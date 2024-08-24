import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  // @Input({required: true}) avatar!: string; //uninitialilzed property
  // @Input({required: true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => '/assets/users' + this.avatar())

  // get imagePath() {
  //   return '/assets/users/' + this.avatar;
  // }

  onSelectUser() {
  }
}
