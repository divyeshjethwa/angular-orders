import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  currentPath: string = 'Dashboard > Currencies' || 'Dashboard';
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.currentPath = 'Dashboard';
    } else {
      this.currentPath = 'Dashboard > Currencies';
    }
  }
}
