import { Component } from '@angular/core';

@Component({
  selector: 'app-header', //select by tagName and it should be at least 2 words w/ '-'
  standalone: true, //is it a standalone component or a module?
  templateUrl: './header-component.html', //external HTML file
  styleUrl: './header.component.css', //create & add here the stylesheet for this component. can be an array.
})

export class HeaderComponent {

}
