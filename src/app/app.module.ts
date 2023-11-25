import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BankModule } from 'src/feature/banks/bank.module';
import { DashBordModule } from 'src/feature/dashbord/dashbord.module';
import { AppRoutingModule } from './app-routing.module';
import { FixedCostModule } from 'src/feature/fixed-cost/fixed-cost.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BankModule,
    DashBordModule,
    FixedCostModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
