import { TestService } from './test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projtest';
  constructor(private service:TestService) {}

  usesomething() : number {
    return this.service.doSomething();
  }
}
