import { Component } from '@angular/core';

@Component({
  selector: 'certificats',
  templateUrl: './certificats.component.html',
  styleUrl: './certificats.component.css',
})
export class CertificatsComponent {
  checkNg() {
    window.open(
      'https://brightcoding.dev/certificate/mohamed-machlou/FCFB8FCE',
      '_blank'
    );
  }
  checkJs() {
    window.open(
      'https://brightcoding.dev/certificate/mohamed-machlou/95C095C9',
      '_blank'
    );
  }
  checkHtml() {
    window.open(
      'https://brightcoding.dev/certificate/mohamed-machlou/22166A25',
      '_blank'
    );
  }
}
