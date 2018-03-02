import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TeamComponent} from "./team/team.component";
import {SignupComponent} from "./signup/signup.component";
import {CartComponent} from "./cart/cart.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {ItemsComponent} from "./items/items.component";
import {AboutComponent} from "./about/about.component";
import {StoreComponent} from "./store/store.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
    {
        path: 'items',
        // TODO
        canActivate: [ AuthGuardService],
        component: ItemsComponent
    },
    { path: 'store',
        component: StoreComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    { path: '', component: AboutComponent },
    { path: '**', component: AboutComponent },
];

const config: ExtraOptions = {
    useHash: true
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
