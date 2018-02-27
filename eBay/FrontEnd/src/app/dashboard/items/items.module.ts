import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule],
  declarations: [ItemsComponent],
  providers: []
})
export class ItemsModule {}
