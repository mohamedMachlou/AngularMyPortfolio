import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  gotolinkedin() {
    window.open('https://www.linkedin.com/in/machloumohamed/', '_blank');
  }
  gotofacebook() {
    window.open(
      'https://www.facebook.com/profile.php?id=100010698731325',
      '_blank'
    );
  }
  gotoinstagram() {
    window.open('https://www.instagram.com/agadirdeveloper/', '_blank');
  }
  gotogithub() {
    window.open('https://github.com/mohamedMachlou', '_blank');
  }
}
