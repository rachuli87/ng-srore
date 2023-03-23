import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public sidebarOpen = false;

  public openSidebar(): void {
    this.sidebarOpen = true;
    console.log('sss');
  }

  public closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
