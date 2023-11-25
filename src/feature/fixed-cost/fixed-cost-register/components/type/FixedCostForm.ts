import { FormControl } from '@angular/forms';

export type FixedCostForm = {
  name: FormControl<string>;
  expose: FormControl<number>;
};
