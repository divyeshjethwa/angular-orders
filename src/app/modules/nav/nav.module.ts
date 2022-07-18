import { RouterModule } from '@angular/router';
import { NavComponent } from './../nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [NavComponent],
})
export class NavModule {}
