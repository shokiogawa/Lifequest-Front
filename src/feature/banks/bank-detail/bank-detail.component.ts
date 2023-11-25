import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.scss'],
})
export class BankDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  bankName: string = '';
  ngOnInit(): void {
    this.bankName = this.route.snapshot.paramMap.get('bankName') as string;
  }
}
