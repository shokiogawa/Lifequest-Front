import { NgModule } from '@angular/core';
import { FixedCostRegisterComponent } from './fixed-cost-register/fixed-cost-register.component';
import { FixedCostRegisterFormComponent } from './fixed-cost-register/components/fixed-cost-register-form/fixed-cost-register-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FixedCostListComponent } from './fixed-cost-list/fixed-cost-list.component';
import { FixedCostRoutingModule } from './fixed-cost-routing.module';

@NgModule({
  declarations: [
    FixedCostRegisterComponent,
    FixedCostRegisterFormComponent,
    FixedCostListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FixedCostRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class FixedCostModule {}
