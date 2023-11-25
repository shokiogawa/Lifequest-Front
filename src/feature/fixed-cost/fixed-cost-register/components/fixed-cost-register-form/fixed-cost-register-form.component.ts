import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';
import { FixedCostForm } from '../type/FixedCostForm';

@Component({
  selector: 'app-fixed-cost-register-form',
  templateUrl: './fixed-cost-register-form.component.html',
  styleUrls: ['./fixed-cost-register-form.component.scss'],
})
export class FixedCostRegisterFormComponent {
  //親コンポーネントからフォームを取得
  @Input() fixedCostForm!: FormGroup<FixedCostForm>;
  // 親コンポーネントに渡す。
  @Output() onClick: EventEmitter<FormGroup<FixedCostForm>> = new EventEmitter<
    FormGroup<FixedCostForm>
  >();

  // 子コンポーネントに入力されたデータを親コンポーネントに渡す。
  passFixedCostInfo = () => {
    this.onClick.emit(this.fixedCostForm);
  };
}
