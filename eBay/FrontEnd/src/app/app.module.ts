import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
////////////////////////////////////////////
import { TeamComponent } from './team/team.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
/* Services Modules */
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { StoreService } from './services/store.service';
import {ToasterModule} from 'angular5-toaster';
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";
///////////////////////////////////////////

@NgModule({
    declarations: [AppComponent,TeamComponent,
        StoreComponent,
        ItemsComponent,
        AboutComponent,
        LoginComponent,
        SignupComponent,
        CartComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        ThemeModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ToasterModule,
        HttpClientModule,
        Ng2SmartTableModule,
        ThemeModule
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthService,
        UserService,
        AuthGuardService,
        StoreService],
    entryComponents: [],
})
export class AppModule {}
