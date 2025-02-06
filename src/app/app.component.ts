import { Component, computed, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  collapsed = signal(false);

  sidenavwidth = computed(() => (this.collapsed() ? '65px' : '250px'));
}
