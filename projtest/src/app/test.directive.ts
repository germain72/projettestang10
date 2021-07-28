import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[testDirective]'
})
export class TestDirective {
  value : string;

  @Input()
  set testDirective(val: string) {
    this.value = val;
  } 
  
  constructor() { }

}
