import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items: MegaMenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: '',
                items: [],
                routerLink: '/'
            },
            {
                label: 'About Us',
                icon: '',
                items: [],
                routerLink: '/about'
            },
            {
                label: 'Activities',
                icon: '',
                items: [],
                routerLink: '/activities'
            },
            {
                label: 'Events',
                icon: '',
                items: [],
                routerLink: '/events'
            },
            {
                label: 'Gallery',
                icon: '',
                items: [],
                routerLink: '/gallery'
            },
            {
                label: 'Our Publications',
                icon: '',
                items: [],
                routerLink: '/publications'
            },
            {
                label: 'Places to visit',
                icon: '',
                items: [],
                routerLink: '/places-to-visit'
            },
            {
                label: 'Donate',
                icon: '',
                items: [],
                routerLink: '/donate'
            },
            {
                label: 'Contact Us',
                icon: '',
                items: [],
                routerLink: '/contact-us'
            },
        ];
    }
}
