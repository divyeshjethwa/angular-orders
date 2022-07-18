import { ClickOutsideDirective } from './click-outside/click-outside.directive';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonComponent, ClickOutsideDirective],
  imports: [CommonModule, BrowserModule],
  exports: [ButtonComponent, ClickOutsideDirective],
})
export class SharedModule {}
