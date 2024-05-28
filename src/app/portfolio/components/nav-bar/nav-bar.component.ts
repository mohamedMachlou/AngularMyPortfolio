/* My Portfolio created by Developer Mohamed Machlou */

import { Component, signal } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  // display les listes
  displayLi = signal<boolean>(false);
  myindex = signal<string>('');

  selected(index: string) {
    this.myindex.set(index);
    console.log(this.myindex());
  }
  toDisplayLi() {
    this.displayLi.set(!this.displayLi());
    console.log(this.displayLi());
  }

  gotohome() {
    document.getElementById('home')?.scrollIntoView();
    this.displayLi.set(!this.displayLi());
  }
  gotoabout() {
    document.getElementById('about')?.scrollIntoView();
    this.displayLi.set(!this.displayLi());
  }
  gotoexperiences() {
    document.getElementById('experiences')?.scrollIntoView();
    this.displayLi.set(!this.displayLi());
  }
  gotoprojects() {
    document.getElementById('projects')?.scrollIntoView();
    this.displayLi.set(!this.displayLi());
  }
  gotocertificates() {
    document.getElementById('certificates')?.scrollIntoView();
    this.displayLi.set(!this.displayLi());
  }
  gotocontact() {
    document.getElementById('contact')?.scrollIntoView();
    this.displayLi.set(!this.displayLi());
  }
}
