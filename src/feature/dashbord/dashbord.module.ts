import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashbordRoutingModule } from './dashbord-routing.module';

@NgModule({
  declarations: [DashbordComponent],
  imports: [CommonModule, DashbordRoutingModule],
  providers: [],
  bootstrap: [],
})
export class DashBordModule {}
