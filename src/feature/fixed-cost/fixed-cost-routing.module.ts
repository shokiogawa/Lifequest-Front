import { RouterModule, Routes } from '@angular/router';
import { FixedCostRegisterComponent } from './fixed-cost-register/fixed-cost-register.component';
import { NgModule } from '@angular/core';
import { FixedCostListComponent } from './fixed-cost-list/fixed-cost-list.component';

const fixedCostRoute: Routes = [
  {
    path: 'fixed-cost-register',
    component: FixedCostRegisterComponent,
  },
  {
    path: 'fixed-cost-list',
    component: FixedCostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(fixedCostRoute)],
  exports: [RouterModule],
})
export class FixedCostRoutingModule {}
