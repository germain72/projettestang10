import { TestService } from './test.service';
import { TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //let ou const global à tous mes tests
  beforeEach(async() => {
    let mockTestService  = {
      angular : 'Angular',
      doSomething : () => { return 5 ;}
  };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers :
      [{provide : TestService,     useValue : mockTestService}],
    }).compileComponents();
  });

  it('should create the app +MOCK ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //Je peux utiliser toutes les méthodes publiques de mon composant
    expect(app).toBeTruthy();
    /**
     * Test du Mock
     */
    expect(app.usesomething()).toEqual(5);
  });

  it(`should have as title 'projtest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //Test la propritété publique title
    expect(app.title).toEqual('projtest');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    //Tester les données du template rattaché au composant
    fixture.detectChanges();
    //Si tout est ready alors je peux tester le DOM de mon template
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome');
  });
});
