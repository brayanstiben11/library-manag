import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerPrestamosPage } from './ver-prestamos.page';

describe('VerPrestamosPage', () => {
  let component: VerPrestamosPage;
  let fixture: ComponentFixture<VerPrestamosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPrestamosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerPrestamosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
