import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTLLISTComponent } from './ctl-list.component';

describe('CTLLISTComponent', () => {
  let component: CTLLISTComponent;
  let fixture: ComponentFixture<CTLLISTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTLLISTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTLLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
