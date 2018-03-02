import { Component } from '@angular/core';
import { MENU_ITEMS } from './app-menu';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

/* Authentication */
import { AuthService } from './services/auth.service';
@Component({
    selector: 'app-root',
    // template: `
    //       // <router-outlet (activate)="onActivate($event)"></router-outlet>`,
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Scroll up to the top of the page on changing the route
    onActivate(event) {
        window.scroll(0, 0);
    }
    constructor(public authService: AuthService,){

    }

    menu: NbMenuItem[];

    ngOnInit() {
        this.menu = MENU_ITEMS;
    }
}
