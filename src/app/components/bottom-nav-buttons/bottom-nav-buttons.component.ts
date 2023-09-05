import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-nav-buttons',
  templateUrl: './bottom-nav-buttons.component.html',
  styleUrls: ['./bottom-nav-buttons.component.scss'],
})
export class BottomNavButtonsComponent {
  @Input() text: string = '';
  @Input() active: boolean = false;
  @Output() clicked = new EventEmitter<string>();

  navigate(): void {
    const sectionId = this.text.toLowerCase().replace(/ /g, '-');
    this.clicked.emit(sectionId);

    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
