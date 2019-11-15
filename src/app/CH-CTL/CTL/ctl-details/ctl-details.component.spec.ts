import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTLDETAILSComponent } from './ctl-details.component';

describe('CTLDETAILSComponent', () => {
  let component: CTLDETAILSComponent;
  let fixture: ComponentFixture<CTLDETAILSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTLDETAILSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTLDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
