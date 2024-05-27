import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  title = signal<string>('<code/>');
  route = inject(Router);
  gotoproject1() {
    window.open('https://github.com/mohamedMachlou/clientManagement', '_blank');
  }
  gotoproject2() {
    window.open(
      'https://github.com/mohamedMachlou/AngularMyPortfolio',
      '_blank'
    );
  }
}
