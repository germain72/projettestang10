import { TestBed,inject } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() =>
  /**
   * J'importe mon service dans le provider
   * pour tester s'il est injectable
   */
  TestBed.configureTestingModule({
    providers : [MathService]
  }));

  /**
   * j'utilise inject mot réservé de module de test Angular
   * pour savoir si je récupère bien l'instance
   * de MathService en injection
   */
  it('Le service est bien injecté', inject([MathService],
    (mathService : MathService) => {
    expect(mathService).toBeTruthy() ;
    }));


  it('should be created', () => {
    const service: MathService = TestBed.inject(MathService);
    expect(service).toBeTruthy();
  });

 /**
  * Exemples de tests unitaires type Classe !!
  */
  it('Test incrémentation',() => {
    let math = new MathService();
    expect(math.Count).toEqual(0);
    math.increment();
    expect(math.Count).toEqual(1);
  });

  it('Test décrémentation',() => {
    let math = new MathService();
    expect(math.Count).toEqual(0);
    math.decrement();
    expect(math.Count).toEqual(-1);
  });

});
