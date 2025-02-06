import { Component, Input, signal, computed } from '@angular/core';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
    selector: 'app-custom-sidenav',
    templateUrl: './custom-sidenav.component.html',
    styleUrl: './custom-sidenav.component.scss',
    standalone: false
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'comment',
      route: 'comment',
    },
  ]);

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));
}
