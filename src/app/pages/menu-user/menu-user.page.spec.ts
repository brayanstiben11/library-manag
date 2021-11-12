import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuUserPage } from './menu-user.page';

describe('MenuUserPage', () => {
  let component: MenuUserPage;
  let fixture: ComponentFixture<MenuUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
