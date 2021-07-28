import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  /**
   * On fait un mock du service TestService
   * comme si on avait une API
   * "LE BOUCHONNAGE"
   */
  let testService : TestService ;
  beforeEach(() =>
  {
    let mockTestService  = {
        angular : 'Angular',
        doSomething : () => { return 5 ;}
    };
    TestBed.configureTestingModule(
      {
        providers :
        [{provide : TestService,     useValue : mockTestService}],
      }
      );
      testService = TestBed.inject(TestService);
  });

  it('Test d’un composant MOCK', async() => {
      expect(testService).toBeTruthy();
      expect(testService.doSomething()).toEqual(5);
  });


  it('should be created', () => {
    const service: TestService = TestBed.inject(TestService);
    expect(service).toBeTruthy();
  });

});
