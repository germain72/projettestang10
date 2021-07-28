import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  private count: number;
 
  constructor() { 
    this.reset();
  }

  get Count(): number 
  {return this.count;}

  reset() {
    this.count = 0;
  }

  increment() {this.count++;}

  decrement() {this.count--;}

}
