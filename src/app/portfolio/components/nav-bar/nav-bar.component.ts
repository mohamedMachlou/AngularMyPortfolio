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
}
