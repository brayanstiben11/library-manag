import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroBibliotecarioPage } from './registro-bibliotecario.page';

describe('RegistroBibliotecarioPage', () => {
  let component: RegistroBibliotecarioPage;
  let fixture: ComponentFixture<RegistroBibliotecarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroBibliotecarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroBibliotecarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
