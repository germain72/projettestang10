import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  angular : string;
  
  doSomething() : number {
    return 3;
  }

  constructor() { }
}
