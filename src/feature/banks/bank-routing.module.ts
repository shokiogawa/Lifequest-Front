import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { BankRegisterComponent } from './bank-register/bank-register.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
const bankRoute: Routes = [
  {
    path: 'bank-list',
    component: BankListComponent,
  },
  {
    path: 'bank-list/:bankName',
    component: BankDetailComponent,
  },
  {
    path: 'bank-register',
    component: BankRegisterComponent,
  },
  {
    path: 'bank-edit/:bankId',
    component: BankEditComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(bankRoute)],
  exports: [RouterModule],
})
export class BankRoutingModule {}
