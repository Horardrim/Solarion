import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { ArrayComponent } from './array/array.component';
import { StringComponent } from './string/string.component';

@Component({
  selector: 'app-ltcd',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './ltcd.component.html',
  styleUrl: './ltcd.component.scss'
})
export class LtcdComponent {
  links = [
    { name: 'Array', component: ArrayComponent },
    { name: 'String', component: StringComponent },
  ];

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: false }) container!: ViewContainerRef;

  loadComponent(component: any) {
    if (this.container) {
      this.container.clear();
      const componentRef = this.container.createComponent(
        this.resolver.resolveComponentFactory(component)
      );
    } else {
      console.error('Container is not initialized in loadComponent');
    }
  }

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.loadComponent(this.links[0].component);
  }
}
