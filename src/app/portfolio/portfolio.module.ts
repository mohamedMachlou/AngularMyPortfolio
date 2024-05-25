import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatsComponent } from './components/certificats/certificats.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    NavBarComponent,
    WelcomeComponent,
    AboutComponent,
    ExperiencesComponent,
    ProjectsComponent,
    CertificatsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
