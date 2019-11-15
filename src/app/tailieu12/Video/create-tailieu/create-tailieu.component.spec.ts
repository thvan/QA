import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTailieuComponent } from './create-tailieu.component';

describe('CreateTailieuComponent', () => {
  let component: CreateTailieuComponent;
  let fixture: ComponentFixture<CreateTailieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTailieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTailieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
