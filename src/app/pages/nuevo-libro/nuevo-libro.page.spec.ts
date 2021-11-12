import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoLibroPage } from './nuevo-libro.page';

describe('NuevoLibroPage', () => {
  let component: NuevoLibroPage;
  let fixture: ComponentFixture<NuevoLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
