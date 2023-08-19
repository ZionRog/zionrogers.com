import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BottomNavButtonsComponent } from './components/bottom-nav-buttons/bottom-nav-buttons.component';

@NgModule({
  declarations: [AppComponent, BottomNavButtonsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
