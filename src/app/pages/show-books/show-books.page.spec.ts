import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowBooksPage } from './show-books.page';

describe('ShowBooksPage', () => {
  let component: ShowBooksPage;
  let fixture: ComponentFixture<ShowBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
