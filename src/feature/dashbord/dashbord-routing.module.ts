import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
const dashbordRoute: Routes = [
  {
    path: 'dashbord',
    component: DashbordComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(dashbordRoute)],
  exports: [RouterModule],
})
export class DashbordRoutingModule {}
