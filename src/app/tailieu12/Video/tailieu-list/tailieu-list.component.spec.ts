import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailieuListComponent } from './tailieu-list.component';

describe('TailieuListComponent', () => {
  let component: TailieuListComponent;
  let fixture: ComponentFixture<TailieuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailieuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
