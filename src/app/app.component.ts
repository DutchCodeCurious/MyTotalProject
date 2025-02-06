import { Component, computed, signal, effect } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent {
  collapsed = signal(false);

  darkMode = signal(false);

  sidenavwidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  applyDarkMode = effect(() => {
    const darkMode = this.darkMode();
    document.body.classList.toggle('darkMode', darkMode);
  });
}
