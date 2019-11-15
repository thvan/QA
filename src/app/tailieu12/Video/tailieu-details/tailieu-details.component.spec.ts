import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailieuDetailsComponent } from './tailieu-details.component';

describe('TailieuDetailsComponent', () => {
  let component: TailieuDetailsComponent;
  let fixture: ComponentFixture<TailieuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailieuDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailieuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
