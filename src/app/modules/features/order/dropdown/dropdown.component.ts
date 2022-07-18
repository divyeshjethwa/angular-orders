import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() options: any;
  @Input() selected: any = 'Please select an option';
  @Input() useValue: any = 'value';
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showOptions() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any) {
    this.selected = option.value;
    this.showOptions();
  }

  clickOutside() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  getValue(item: any) {
    if (this.useValue === 'currency') return item.currency;
    if (this.useValue === 'value') return item.value;
  }
}
