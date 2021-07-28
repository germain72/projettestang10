import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestDirective } from '../test.directive';
/**
 * By me permet de récupérer dans le DOM
 * de mon composant une directive ou un composant enfant
 */
import { By } from '@angular/platform-browser';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TestDirective ]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('La directive est bien présente et la propriété est bien Angular',
  async() => {
    const directiveEl =
    fixture.debugElement.query(By.directive(TestDirective));
    //Je récupère l'instance de la directive
    //TestDirective si elle existe
    expect(directiveEl).not.toBeNull() ;//Instance ok  ou non
    const directiveInstance = directiveEl.injector.get(TestDirective) ;
    expect(directiveInstance.value).toBe('Angular');
    }) ;
});
