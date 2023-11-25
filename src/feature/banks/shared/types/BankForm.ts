import { FormControl } from '@angular/forms';
export type BankForm = {
  id: FormControl<number>;
  familyId: FormControl<number>;
  familyMemberId: FormControl<number>;
  name: FormControl<string>;
  code: FormControl<string>;
  branchName: FormControl<string>;
  branchNumber: FormControl<number>;
  accountNumber: FormControl<number>;
  totalAmount: FormControl<number>;
  categoryName: FormControl<string>;
  createdAt: FormControl<string>;
  updatedAt: FormControl<string>;
  deletedAt: FormControl<string>;
};
