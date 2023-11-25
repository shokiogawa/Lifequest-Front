import { Component, Input, OnInit } from '@angular/core';
import { ChartComponent, Color, ScaleType } from '@swimlane/ngx-charts';
import { Bank } from 'src/core/model/Bank';

@Component({
  selector: 'app-bank-chart',
  templateUrl: './bank-chart.component.html',
  styleUrls: ['./bank-chart.component.scss'],
})
export class BankChartComponent implements OnInit {
  @Input() banks: Bank[] = [];
  // グラフの表示サイズ
  view: [number, number] = [700, 400];

  // 設定
  showLegend = true;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = false;

  // カラーテーマ
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Custome Usage',
  };
  sampleData: sampleData[] = [];

  ngOnInit(): void {
    console.log(this.banks[0].name);
    console.log(this.banks[0].total_amount_string);
    this.sampleData = this.banks.map((bank) => {
      return {
        name: bank.name,
        value: bank.total_amount,
        extra: {
          category: bank.category_name,
        },
      };
    });
  }
}

type sampleData = {
  name: string;
  value: number;
  extra: {
    category: string;
  };
};
