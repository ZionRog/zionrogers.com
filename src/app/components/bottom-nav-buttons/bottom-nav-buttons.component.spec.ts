import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavButtonsComponent } from './bottom-nav-buttons.component';

describe('BottomNavButtonsComponent', () => {
  let component: BottomNavButtonsComponent;
  let fixture: ComponentFixture<BottomNavButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomNavButtonsComponent]
    });
    fixture = TestBed.createComponent(BottomNavButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
