import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletebookPage } from './deletebook.page';

describe('DeletebookPage', () => {
  let component: DeletebookPage;
  let fixture: ComponentFixture<DeletebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
