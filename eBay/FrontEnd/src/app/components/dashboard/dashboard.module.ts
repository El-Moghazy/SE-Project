import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { TeamComponent } from '../team/team.component';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    TeamComponent
  ],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
