import { Bank } from 'src/core/model/Bank';

export type BankList = {
  total_amount: number;
  total_amount_string: string;
  bank_list: [Bank];
};
