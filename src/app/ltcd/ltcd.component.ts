import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ltcd',
  imports: [],
  templateUrl: './ltcd.component.html',
  styleUrl: './ltcd.component.scss'
})
export class LtcdComponent {
  // 下拉框的选项
  options = [
    { value: 'option1', label: '选项 1' },
    { value: 'option2', label: '选项 2' },
    { value: 'option3', label: '选项 3' }
  ];

  // 选中的值
  selectedValue: string | null = null;

  // 处理选中值变化的事件
  onValueChange(value: string) {
    console.log('选中的值:', value);
  }
}
