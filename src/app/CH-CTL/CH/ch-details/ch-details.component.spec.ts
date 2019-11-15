import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHDETAILSComponent } from './ch-details.component';

describe('CHDETAILSComponent', () => {
  let component: CHDETAILSComponent;
  let fixture: ComponentFixture<CHDETAILSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHDETAILSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
