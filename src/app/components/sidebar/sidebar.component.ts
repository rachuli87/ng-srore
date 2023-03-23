import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() onClosingSidebar: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {}

  public closingSidebar() {
    this.onClosingSidebar.emit();
  }

  public navigateToAdmin() {
    this.router.navigate(['/admin']);
    this.closingSidebar();
  }

  // ngOnChanges(changes: any) {
  //   console.log('CHANGE', changes);
  // }
}
