import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuBibliotecarioPage } from './menu-bibliotecario.page';

describe('MenuBibliotecarioPage', () => {
  let component: MenuBibliotecarioPage;
  let fixture: ComponentFixture<MenuBibliotecarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBibliotecarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBibliotecarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
