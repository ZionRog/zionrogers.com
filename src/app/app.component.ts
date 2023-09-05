import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zionrogers.com';
  sections = ['Skills', 'About Me', 'Experience', 'Contact'];
  activeSection: string = '';
  setActiveSection(section: string): void {
    this.activeSection = section;
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const skillsElement = document.getElementById('skills');
    const experienceElement = document.getElementById('experience');
    const contactElement = document.getElementById('contact');
    const aboutElement = document.getElementById('about-me');

    if (skillsElement && window.scrollY >= skillsElement.offsetTop) {
      this.activeSection = 'skills';
    }
    if (experienceElement && window.scrollY >= experienceElement.offsetTop) {
      this.activeSection = 'experience';
    }
    if (contactElement && window.scrollY >= contactElement.offsetTop) {
      this.activeSection = 'experience';
    }
    if (aboutElement && window.scrollY >= aboutElement.offsetTop) {
      this.activeSection = 'about-me';
    }
  }
}
