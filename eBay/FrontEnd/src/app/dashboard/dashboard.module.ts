import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

/* Api Modules */
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* Routing Modules */
import { DashboardRoutingModule } from './dashboard-routing.module';


/* Components Modules */
import { DashboardComponent } from './dashboard.component';
import { TeamComponent } from './team/team.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';

/* Services Modules */
import { StoreService } from '../services/store.service';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule, HttpModule, FormsModule],
  declarations: [
    DashboardComponent,
    TeamComponent,
    StoreComponent,
    AboutComponent
  ],
  entryComponents: [],
  providers: [
    StoreService
  ]
})
export class DashboardModule {}
