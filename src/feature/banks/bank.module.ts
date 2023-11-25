import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { BankRoutingModule } from './bank-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BankRegisterComponent } from './bank-register/bank-register.component';
import { BankListAreaComponent } from './bank-list/components/bank-list-area/bank-list-area.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankRegisterFormComponent } from './shared/components/bank-register-form/bank-register-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BankChartComponent } from './bank-list/components/bank-chart/bank-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    BankListComponent,
    BankDetailComponent,
    BankRegisterComponent,
    BankRegisterFormComponent,
    BankListAreaComponent,
    BankEditComponent,
    BankChartComponent,
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class BankModule {}
